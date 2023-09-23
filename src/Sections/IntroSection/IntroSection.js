import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { ATypography } from 'components/ATypography';
import { dFlexStyles, sectionIntro } from 'utils/constants';
import arrow from 'assets/icons/arrow.svg';
import slide_one from 'assets/images/slide_one.webp';
import slide_second from 'assets/images/slide_second.webp';
import slide_third from 'assets/images/slide_third.webp';

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
                        'intro__left-part',
                        'd-flex',
                        'align-items-center',
                        'justify-content-center',
                        'flex-column',
                        'px-4',
                        'ps-xxl-12',
                        'pe-xxl-20',
                        'mt-9',
                        'mb-9'
                  ]
            );

            this.titleElement = new ATypography(this.leftPart, 'h1', ['title', 'mb-5']).setText(
                  title
            );

            this.subTitleElement = new ATypography(this.leftPart, 'p', [
                  'sub-title',
                  'py-0',
                  'text-justify',
                  'display-9',
            ]).setText(description);

            this.buttonBlock = new BaseComponent(this.leftPart.element, 'div', [
                  'd-flex',
                  'mt-6',
                  'gap-4',
                  'px-0',
                  'w-100',
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
                  ['intro__right-part', 'carousel', 'slide', 'px-0', 'gy-0'],
                  `  
                  <div class="carousel-inner  ">
                    <div class="carousel-item active c-item ">
                      <img src=${slide_one} class="w-100 object-fit-cover" alt="Slide 1">
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
                  'intro__right-part_slider-buttons',
                  'position-absolute',
                  'd-flex',
                  'justify-content-between',
                  'w-20',
                  'bg-beige50',
                  'px-4',
                  'py-5',
                  'z-index-2',
                  'top-85',
                  'end-0',
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
