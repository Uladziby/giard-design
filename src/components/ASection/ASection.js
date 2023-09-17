import { BaseComponent } from '../BaseComponent';

export class ASection extends BaseComponent {
      constructor(parentNode = null, tagName = 'section', className = [], id = null) {
            super(parentNode, tagName, className);
            this.id = id;
            this.applyClasses();
      }

      applyClasses() {
            this.element.classList.add('container-fluid', 'd-flex', 'px-0');
            this.element.setAttribute('id', this.id);
      }
}
