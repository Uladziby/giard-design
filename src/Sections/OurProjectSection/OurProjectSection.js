import './styles.scss';
import Masonry from 'masonry-layout';
import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { dFlexStyles, sectionOurProjects } from 'utils/constants';
import { AButton } from 'components/AButton';
import { photoGallery } from './constants';

export class OurProjectSection extends ASection {
      constructor(parentNode = null, className = [], id = null) {
            super(parentNode, 'section', className, id);

            this.gridElements = [];

            const { title, subTitle } = sectionOurProjects;

            this.headerContainer = new BaseComponent(
                  this.element,
                  'div',
                  ['d-flex', 'align-items-start', 'flex-column', 'm-8', 'mb-8'],
                  `<h6 class="text-center text-green">${title}</h6><h2>${subTitle}</h2>`,
            );

            this.container = new BaseComponent(this.element, 'div', ['d-block', 'w-100']);

            this.grid = new BaseComponent(this.container.element, 'div', [
                  'grid',
                  'position-relative',
            ]);

            this.gridSizer = new BaseComponent(this.grid.element, 'div', ['grid-sizer']);

            photoGallery.forEach(
                  ({ path, height }) => {
                        this.gridItem = new BaseComponent(this.grid.element, 'div', [
                              'grid-item',], `<img src=${path} style="
                               height:${height}px;"  alt="${path}" />`);

                        this.gridElements.push(this.gridItem);
                  }
            );

            const msnry = new Masonry('.grid', {
                  columnWidth: '.grid-sizer',
                  gutter: 20,
                  itemSelector: '.grid-item',
                  percentPosition: true,
            });

            msnry.appended(this.gridElements);

            msnry.layout();

            this.button = new AButton(this.element, [
                  ...dFlexStyles,
                  'btn-outline-black',
                  'btn-sm',
                  'position-absolute',
                  'top-90',
                  'start-45',
                  'px-4',
                  'py-3',
                  'z-3',
            ]);

            this.button.element.addEventListener('click', this.handleButtonClick.bind(this));
            this.handleButtonClick();
      }

      handleButtonClick() {
            if (this.buttonName === sectionOurProjects.btnShow) {
                  this.buttonName = sectionOurProjects.btnHide;

                  this.element.setAttribute('style', 'height: 1600px');

                  this.element.setAttribute('id', '');

                  this.button.setContent(
                        `<div class='px-2 text-btn'> ${sectionOurProjects.btnHide}</div><i class="bi bi-arrow-up"></i>`,
                  );
            } else {
                  this.element.setAttribute('style', 'height: 900px');

                  this.buttonName = sectionOurProjects.btnShow;

                  this.element.setAttribute('id', 'projects');

                  this.button.setContent(
                        `<div class='px-2 text-btn'> ${sectionOurProjects.btnShow}</div><i class="bi bi-arrow-down"></i>`,
                  );
            }
      }
}
