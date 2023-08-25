import logo from 'assets/icons/giarddesign.svg';
import search from 'assets/icons/search.svg';
import { BaseComponent } from 'components/BaseComponent';
import { NavBar } from 'components/NavBar';
import { navBar } from 'utils/constants';

export class HeaderComponent extends BaseComponent {
    constructor(parentNode = null, tagName = 'header', className = [], id = null) {
        super(parentNode, tagName, className, id);

        this.logoContainer = new BaseComponent(this.element, 'div', [
            'logo-container',
        ])
            .setContent(`<img src=${logo} alt="logo" />`);

        this.navBar = new NavBar(this.element, navBar);

        this.searcButton = new BaseComponent(this.navBar.element, 'button', ['btn'])
            .setContent(
                `<img src=${search} alt="logo" />`,
            );
    }
}
