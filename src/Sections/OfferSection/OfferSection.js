import { ASection } from 'components/ASection/ASection';
import { BaseComponent } from 'components/BaseComponent';

export class OfferSection extends ASection {
      constructor(parentNode = null, className = []) {
            super(parentNode, 'section', className);
            this.header = new BaseComponent(this.element, 'div', ['section-title']);
            this.title = new BaseComponent(this.header.element, 'h2', ['title']).setContent();
      }
}
