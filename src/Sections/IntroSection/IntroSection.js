import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { ATypography } from 'components/ATypography';
import PhotoIntro from 'assets/images/Photo.jpg';
import { sectionIntro } from 'utils/constants';
import './styles.scss';

const { title, description, button_contact, button_portfolio } = sectionIntro;

export class IntroSection extends ASection {
      constructor(parentNode, className = [], id = null) {
            super(parentNode, 'section', className, id);
            this.leftPart = new BaseComponent(this.element, 'div', [
                  'd-flex',
                  'justify-content-center',
                  'align-items-center',
                  'flex-column',
                  'w-50',
                  'py-4',
                  'px-8',
            ]);

            this.init();
      }

      init() {
            this.titleElement = new ATypography(this.leftPart, 'h1', ['title', 'mb-5']).setText(
                  title,
            );
            this.subTitleElement = new ATypography(this.leftPart, 'p', [
                  'sub-title',
                  'fs-9',
                  'py-0',
                  'text-justify',
            ]).setText(description);

            this.buttonBlock = new BaseComponent(this.leftPart.element, 'div', [
                  'container',
                  'd-flex',
                  'mt-6',
                  'gap-4',
                  'px-0',
            ]);

            this.buttonContact = new BaseComponent(this.buttonBlock.element, 'button', [
                  'btn',
                  'btn-green',
                  'fs-9',
                  'lh-base',
            ]);
            this.buttonContact.setContent(button_contact);

            this.buttonPortfolio = new BaseComponent(this.buttonBlock.element, 'button', [
                  'btn',
                  'btn-portfolio',
                  'btn-outline-green',
                  'fs-9',
            ]);
            this.buttonPortfolio.setContent(
                  `<div class='px-2 text-btn'> ${button_portfolio}</div><img class='px-2 arrow-down' src="assets/icons/arrow_down.svg" alt="arrow" />`,
            );

            const rigthPart = new BaseComponent(this.element, 'div', ['w-50']).setContent(
                  `<img src=${PhotoIntro} alt="Photo" />`,
            );
      }
}
