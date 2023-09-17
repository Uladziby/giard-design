import './styles.scss';
import Masonry from 'masonry-layout';
import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { dFlexStyles, sectionOurProjects } from 'utils/constants';
import { AButton } from 'components/AButton';
import { photoGallery } from './constants';
import arrowDown from 'assets/icons/arrow_down.svg';

export class OurProjectSection extends ASection {
      constructor(parentNode = null, className = [], id = null) {
            super(parentNode, 'section', className, id);

            const { title, subTitle, btnHide } = sectionOurProjects;

            this.headerContainer = new BaseComponent(this.element, 'div', [
                  'position-relative',
                  'd-flex',
                  'align-items-start',
                  'justify-content-center',
                  'flex-column',
                  'm-8',
                  'mb-5',
            ]).setContent(`<h6 class="text-center">${title}</h6><h2>${subTitle}</h2>`);

            this.gridContainer = new BaseComponent(this.element, 'div', [
                  'grid',
                  'justify-content-between',
                  'w-100',
                  'h-100',
                  'position-relative',
            ]);
            this.gridSizer = new BaseComponent(this.gridContainer.element, 'div', ['grid-sizer']);

            photoGallery.forEach(
                  ({ path, height }) =>
                        (this.gridItem = new BaseComponent(this.gridContainer.element, 'div', [
                              'grid-item',
                              'bottom-15',
                        ]).setContent(
                              `<img src=${path} class="w-100 d-block" style="height:${height}px" alt="${path}" />`,
                        )),
            );

            // @ts-ignore
            const msnry = new Masonry('.grid', {
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-sizer',
                  gutter: 26,
                  initLayout: false,
            });

            // trigger initial layout
            msnry.layout();

            this.buttonName = btnHide;
            this.button = new AButton(this.element, [
                  'btn-outline-black',
                  'btn-sm',
                  ...dFlexStyles,
                  'position-absolute',
                  'top-90',
                  'start-45',
                  'px-4',
                  'py-3',
            ]);
            this.button.element.addEventListener('click', this.handleButtonClick.bind(this));
            this.handleButtonClick();
      }

      handleButtonClick() {
            if (this.buttonName === sectionOurProjects.btnShow) {
                  this.buttonName = sectionOurProjects.btnHide;

                  this.element.setAttribute('style', 'height: 1900px');

                  this.gridContainer.element.setAttribute(
                        'style',
                        '-webkit-mask-image: -webkit-gradient(linear,left center,left bottom,from(rgba(0, 0, 0, 1)),to(rgba(0, 0, 0, 1)));',
                  );

                  this.button.setContent(
                        `<div class='px-2 text-btn'> ${sectionOurProjects.btnHide}</div><i class="bi bi-arrow-up"></i>`,
                  );
            } else {
                  this.element.setAttribute('style', 'height: 900px');

                  this.buttonName = sectionOurProjects.btnShow;

                  this.gridContainer.element.setAttribute(
                        'style',
                        '-webkit-mask-image: -webkit-gradient(linear,left center,left bottom,from(rgba(0, 0, 0, 1)),to(rgba(0, 0, 0, 0)));',
                  );

                  this.button.setContent(
                        `<div class='px-2 text-btn'> ${sectionOurProjects.btnShow}</div><i class="bi bi-arrow-down"></i>`,
                  );
            }
      }
}
