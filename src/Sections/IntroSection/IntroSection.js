import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { ATypography } from 'components/ATypography';
import { dFlexStyles, sectionIntro } from 'utils/constants';
import arrow from 'assets/icons/arrow.svg';
import slide_one from 'assets/images/slider_photo.jpg';
import slide_second from 'assets/images/photoGallery/photo_4.jpg';
import slide_third from 'assets/images/Photo.jpg';

import './styles.scss';

const { title, description, button_contact, button_portfolio } = sectionIntro;

export class IntroSection extends ASection {
      constructor(parentNode, className = [], id = null) {
            super(parentNode, 'section', className, id);

            this.init();
      }

      init() {
            this.leftPart = new BaseComponent(
                  this.element,
                  'div',
                  [
                        'd-flex',
                        'justify-content-center',
                        'align-items-center',
                        'flex-column',
                        'py-4',
                        'px-8',
                        'mw-50',
                  ],
                  '',
                  '',
                  [],
                  'max-width: 656px',
            );

            this.titleElement = new ATypography(this.leftPart, 'h1', ['title', 'mb-5']).setText(
                  title,
            );

            this.subTitleElement = new ATypography(this.leftPart, 'p', [
                  'sub-title',
                  'fs-9',
                  'py-0',
                  'text-justify',
                  'display-9',
            ]).setText(description);

            this.buttonBlock = new BaseComponent(this.leftPart.element, 'div', [
                  'container',
                  'd-flex',
                  'mt-6',
                  'gap-4',
                  'px-0',
            ]);

            this.buttonContact = new BaseComponent(
                  this.buttonBlock.element,
                  'a',
                  ['btn', 'btn-green', ...dFlexStyles, 'lh-base', 'px-3', 'py-3'],
                  button_contact,
                  '',
                  [{ name: 'href', value: '#contact' }],
            );

            this.buttonPortfolio = new BaseComponent(
                  this.buttonBlock.element,
                  'a',
                  ['btn', 'btn-portfolio', 'btn-outline-green', ...dFlexStyles, 'px-3', 'py-3'],
                  '',
                  '',
                  [{ name: 'href', value: '#projects' }],
            );

            this.buttonPortfolio.setContent(
                  `<span class='px-2 text-btn btn-l'> ${button_portfolio}</span><i class="bi bi-arrow-right"></i>`,
            );

            this.rightPart = new BaseComponent(
                  this.element,
                  'div',
                  ['carousel', 'slide', 'flex-grow-1'],
                  `  
                  <div class="carousel-inner ">
                    <div class="carousel-item active c-item ">
                      <img src=${slide_one} class=" object-fit-cover" alt="Slide 1">
                    </div>
                    <div class="carousel-item c-item">
                      <img src=${slide_second} class="d-block w-100 object-fit-cover" alt="Slide 2">
                    </div>
                    <div class="carousel-item c-item">
                      <img src=${slide_third} class="d-block w-100 c-img" alt="Slide 3">
                    </div>
                  </div>
                `,
                  'carousel',
                  [{ name: 'data-bs-ride', value: 'carousel' }],
            );

            this.containerSliderButtons = new BaseComponent(this.rightPart.element, 'div', [
                  'position-absolute',
                  'd-flex',
                  'w-20',
                  'justify-content-between',
                  'bg-beige50',
                  'py-5',
                  'px-4',
                  'z-index-2',
                  'top-85',
                  'start-80',
            ]);

            this.leftSlideButton = new BaseComponent(
                  this.containerSliderButtons.element,
                  'a',
                  ['bg-beige50'],
                  `<img src=${arrow} class='rotate-left' alt='arrowLeft'/>`,
                  'prevButton',
                  [
                        { name: 'role', value: 'button' },
                        { name: 'data-bs-target', value: '#carousel' },
                        { name: 'data-bs-slide', value: 'prev' },
                  ],
            );

            this.rightSlideButton = new BaseComponent(
                  this.containerSliderButtons.element,
                  'a',
                  ['h'],
                  `<img src=${arrow} alt='arrowRight'/>`,
                  'nextButton',
                  [
                        { name: 'role', value: 'button' },
                        { name: 'data-bs-target', value: '#carousel' },
                        { name: 'data-bs-slide', value: 'next' },
                  ],
            );
      }
}
