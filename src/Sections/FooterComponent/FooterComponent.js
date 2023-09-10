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
            'd-flex',
            'justify-content-between',
            'border-bottom',
            'pb-9',
            'w-100',
        ]);
        this.logo = new BaseComponent(
            this.header.element,
            'div',
            ['align-items-center'],
            `<img src=${logo} class=object-fit-cover" alt="logo" />`,
        );
        this.buttonBlock = new BaseComponent(this.header.element, 'div', [
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
            ['btn', 'btn-primary'],
            btnContact,
        );

        this.contactsBlock = new BaseComponent(this.element, 'div', [
            'd-flex',
            'justify-content-between',
            'align-items-center',
            'pt-9',
            'w-100',
        ]);

        this.leftSide = new BaseComponent(this.contactsBlock.element, 'div', [
            'd-flex',
            'align-items-start',
            'w-50',
            'gap-4',
        ]);
        socials.forEach(
            social => {
                const element = new BaseComponent(this.leftSide.element, 'a', ['text-beige50', 'cursor-pointer', 'text-decoration-none'], social);
                element.setAttribute('href', `#${social}`);

            }
        );

        this.rightSide = new BaseComponent(
            this.contactsBlock.element,
            'div',
            ['d-flex', 'justify-content-between', 'gap-4', 'align-items-start'],
            `<span class="text-beige50">${phone}</span><span class="text-beige50">${email}</span>`,
        );

        this.footer = new BaseComponent(
            this.element,
            'div',
            ['d-flex', 'justify-content-between', 'align-items-center', 'mt-16', 'w-100',],
            `<span class="text-beige50">${additionalInfo}</span><span class="text-beige50">${madeBy} <img src="${logoCompany}" alt="company"/></span>`,
        );
    }
}
