import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { dFlexStyles, sectionOffer } from 'utils/constants';
import { OfferCardElement } from './OfferCardElement/OfferCardElement';

const { title, description, offers } = sectionOffer;

export class OfferSection extends ASection {
      constructor(parentNode = null, className = []) {
            super(parentNode, 'section', className);

            this.header = new BaseComponent(this.element, 'div', ['section-title', 'd-flex', 'flex-column', 'flex-start', 'mt-13', 'pb-13', 'px-26']);
            this.subTitle = new BaseComponent(this.header.element, 'h6', ['sub-title', 'teal'], 'Oferta');
            this.title = new BaseComponent(this.header.element, 'h2', ['title'], title);
            this.description = new BaseComponent(this.header.element, 'p', ['description', 'pt-5', 'w-75'], description);

            this.cardContainer = new BaseComponent(this.element, 'div', ['container', 'd-flex', 'flex-wrap', 'justify-content-between', 'align-items-center', 'px-12', 'w-100', 'gap-5', 'pb-21']);

            offers.forEach((offers) => new OfferCardElement(this.cardContainer.element, offers, ['offer-card', 'd-flex', 'px-6', 'py-7', 'flex-column', 'align-items-start', 'justify-content-start', 'bg-white', 'rounded-4']));
      }
}
