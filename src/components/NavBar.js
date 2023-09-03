import { BaseComponent } from './BaseComponent';

export class NavBar extends BaseComponent {
    constructor(parentNode = null, navBarItems) {
        super(parentNode, 'nav', ['navbar', 'navbar-expand-lg', 'navbar-light']);
        this.navBar = new BaseComponent(this.element, 'ul', [
            'navbar-nav',
            'me-auto',
            'mb-2',
            'mb-lg-0',
        ]);

        navBarItems.map(item => {
            const { title, href, nestedElements } = item;
            const navBarElement = new BaseComponent(this.navBar.element, 'li', [
                'navbar-item',
                'text-decoration-none',
                'display-10',
            ]);

            if (item.hasOwnProperty('nestedElements')) {
                navBarElement.setContent(
                    `<a class="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">${title}</a>`,
                );

                const dropdownMenu = new BaseComponent(navBarElement.element, 'ul', [
                    'dropdown-menu',
                ]);

                nestedElements.map(({ title, href }) => {
                    const nestedElement = new BaseComponent(
                        dropdownMenu.element,
                        'a',
                        ['dropdown-item', 'text-decoration-none', 'display-10'],
                        title,
                    );

                    // @ts-ignore
                    nestedElement.element.href = `#${href}`;
                });
            } else {
                const link = new BaseComponent(
                    navBarElement.element,
                    'a',
                    ['nav-link', 'text-decoration-none'],
                    title,
                );
                // @ts-ignore
                link.element.href = `#${href}`;
            }
        });
    }
}
