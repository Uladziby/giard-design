import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';
import { sectionOffer } from 'utils/constants';
import { OfferCardElement } from './OfferCardElement/OfferCardElement';

const { title, description, offers } = sectionOffer;

export class OfferSection extends ASection {
      constructor(parentNode = null, className = [], id = null) {
            super(parentNode, 'section', className, id);

            this.header = new BaseComponent(this.element, 'div', ['offers__header',
                  'section-title',
                  'mt-13',
                  'pb-13',
                  'd-flex',
                  'justify-content-center',
                  'flex-column',
                  'px-9'
                  /*        
                         ,
                         'flex-start',
                        '
                         , */
            ]);
            this.subTitle = new BaseComponent(
                  this.header.element,
                  'h6',
                  ['sub-title', 'text-green'],
                  'Oferta',
            );
            this.title = new BaseComponent(this.header.element, 'h2', ['title'], title);
            this.description = new BaseComponent(
                  this.header.element,
                  'p',
                  ['description', 'pt-5',],
                  description,
            );

            this.cardContainer = new BaseComponent(this.element, 'div', ['offers__cards',
                  'align-items-center',
                  'gap-5',
                  'd-flex',
                  'my-row',
                  'justify-content-center',
                  /*       
                              'flex-wrap',
                              'justify-content-between',
                              'px-12',
                              'w-100',
                               */
            ]);

            offers.forEach(
                  offers =>
                        new OfferCardElement(this.cardContainer.element, offers, [
                              'offer-card',
                              'd-flex',
                              'px-6',
                              'py-7',
                              'flex-column',
                              'align-items-start',
                              'justify-content-start',
                              'bg-white',
                              'rounded-4',
                        ]),
            );
      }
}
