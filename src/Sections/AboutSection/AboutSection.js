import { ASection } from 'components/ASection/ASection';
import photo from 'assets/images/photoGallery/photo_10.webp';
import { BaseComponent } from 'components/BaseComponent';
import { sectionAboutUs } from 'utils/constants';


export class AboutSection extends ASection {
      constructor(parentNode, className = [], id = null) {
            super(parentNode, 'section', className, id);
            this.leftPart = new BaseComponent(this.element, 'div', ['aboutus__left-part', 'm-0', 'p-0']);
            this.rigthPart = new BaseComponent(this.element, 'div', [
                  'aboutus__right-part',
                  'd-flex',
                  'flex-column',
                  'justify-content-center',
                  'align-items-start',
                  'py-10',
                  'ps-10',
                  'pe-8',
            ]);

            this.init();
      }

      init() {
            const { title, subtitle, description, btnDetail } = sectionAboutUs;
            this.leftPart.setContent(`<img src=${photo} class="object-fit-cover w-100 h-100" alt="${photo}" />`);

            this.titleElement = new BaseComponent(
                  this.rigthPart.element,
                  'h7',
                  ['title', 'text-light', 'fw-light'],
                  title,
            );

            this.subTitleElement = new BaseComponent(
                  this.rigthPart.element,
                  'h2',
                  ['sub-title', 'fs-2', 'text-light', 'pb-6'],
                  subtitle,
            );

            this.descriptionElement = new BaseComponent(
                  this.rigthPart.element,
                  'p',
                  ['description', 'text-justify', 'text-light', 'fw-light', 'pb-10', 'ml-13'],
                  description,
            );

            this.buttonElement = new BaseComponent(this.rigthPart.element, 'link', [
                  'btn',
                  'btn-outline-beige50',
                  'btn-lg',
                  'fs-9',
                  'lh-base',
            ]);

            this.buttonElement.setContent(
                  `<span class='fw-light'>${btnDetail}</span><i class="bi bi-arrow-right ms-3"></i>`,
            );
      }
}
