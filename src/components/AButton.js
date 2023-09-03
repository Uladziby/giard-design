import { BaseComponent } from "./BaseComponent";

export class AButton extends BaseComponent {
    constructor(parentNode = null, className = [], content = '') {
        super(parentNode, 'button', className, content);

        this.element.classList.add('btn');
        this.element.setAttribute('type', 'button');
    }

} 