import logo from 'assets/icons/giarddesign.svg';
import { BaseComponent } from 'components/BaseComponent';
import { NavBar } from 'components/NavBar';
import { navBar } from 'utils/constants';
import { SearchDropdown } from 'components/SearchDropdown/SearchDropdown';
import 'components/SearchDropdown/styles.scss';

export class HeaderComponent extends BaseComponent {
    constructor(parentNode = null, tagName = 'header', className = [], id = null) {
        super(parentNode, tagName, className, id);

        this.logoContainer = new BaseComponent(this.element, 'div', [
            'logo-container',
        ]).setContent(`<img src=${logo} alt="logo" />`);

        this.navBar = new NavBar(this.element, navBar);

        this.searchDropdown = new SearchDropdown(this.navBar.element);
    }
}
