import { BaseComponent } from 'components/BaseComponent';
import logo from 'assets/icons/giardlogo.svg';
import logoCompany from 'assets/icons/logoCompany.svg';
import { ASection } from '../../components/ASection/ASection';
import { sectionFooter } from 'utils/constants';

const { btnContact, label, socials, email, phone, additionalInfo, madeBy } = sectionFooter;

export class FooterComponent extends ASection {
      constructor(parentNode = null, tagName = 'footer', className = [], id = null) {
            super(parentNode, tagName, className, id);

            this.init();
      }

      init() {
            this.header = new BaseComponent(this.element, 'div', [
                  'footer__header',
                  'my-row',
                  'pb-9',
                  'border-bottom',
            ]);

            this.logo = new BaseComponent(
                  this.header.element,
                  'div',
                  ['align-items-center', 'footer__header-logo'],
                  `<img src=${logo} class=object-fit-cover" alt="logo" />`,
            );

            this.buttonBlock = new BaseComponent(this.header.element, 'div', [
                  'footer__header-contact',
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
            ]);

            this.label = new BaseComponent(
                  this.buttonBlock.element,
                  'span',
                  ['align-text-center', 'me-4', 'text-beige50'],
                  label,
            );

            this.buttonContact = new BaseComponent(
                  this.buttonBlock.element,
                  'button',
                  ['btn', 'btn-secondary', 'bg-green'],
                  btnContact
            );

            this.contactsBlock = new BaseComponent(this.element, 'div', [
                  'd-flex',
                  'footer__contacts-block',
                  'my-row',
                  'justify-content-between',
                  'align-items-center',
                  'pt-9',
            ]);

            this.leftSide = new BaseComponent(this.contactsBlock.element, 'div', [
                  'd-flex',
                  'footer__links',
                  'align-items-start',
                  'gap-4',
            ]);

            socials.forEach(social => {
                  const element = new BaseComponent(
                        this.leftSide.element,
                        'a',
                        ['text-beige50', 'cursor-pointer', 'text-decoration-none'],
                        social,
                  );
                  element.setAttribute('href', `#${social}`);
            });

            this.rightSide = new BaseComponent(
                  this.contactsBlock.element,
                  'div',
                  ['footer__phone', 'd-flex', 'justify-content-between', 'gap-4', 'align-items-start'],
                  `<span class="text-beige50 w-60 text-nowrap">
                        ${phone}
                  </span>
                  <span class="text-beige50 w-40">
                        ${email}
                  </span>`,
            );

            this.bottom = new BaseComponent(
                  this.element,
                  'div',
                  ['my-row', 'footer__bottom', 'd-flex', 'justify-content-between', 'mt-16', 'mx-0', 'w-100'],
                  `<span class="col-md-5 text-beige50">
                        ${additionalInfo}
                  </span>
                  <span class="col-md-6 text-beige50 ">
                        <span>${madeBy}</span> 
                        <img src="${logoCompany}" alt="company"/>
                  </span>`,
            );
      }
}
