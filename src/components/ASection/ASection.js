import { BaseComponent } from '../BaseComponent';

export class ASection extends BaseComponent {
      constructor(parentNode = null, tagName = 'section', className = ['container'], id = null) {
            super(parentNode, tagName, className, id);
            this.applyClasses();
      }
      applyClasses() {
            this.element.classList.add('d-flex');
      }
}
