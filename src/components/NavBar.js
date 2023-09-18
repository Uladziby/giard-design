import { BaseComponent } from './BaseComponent';
import './styles.scss';

export class NavBar extends BaseComponent {
      constructor(parentNode = null, navBarItems, className = []) {
            super(parentNode, 'nav', [...className, 'navbar', 'navbar-expand-lg', 'navbar-light',
            ]);
            this.navBar = new BaseComponent(this.element, 'ul', [
                  'navbar-nav',
                  'me-auto',
                  'mb-2',
                  'mb-lg-0',
                  'd-flex',
                  'gap-5',
            ]);

            navBarItems.map(item => {
                  const { title, href, nestedElements } = item;
                  const navBarElement = new BaseComponent(this.navBar.element, 'li', [
                        'navbar-item',
                        'text-decoration-none',
                        'fw-normal',
                  ]);

                  if (item.hasOwnProperty('nestedElements')) {
                        this.dropdown = new BaseComponent(
                              navBarElement.element,
                              'div',
                              ['d-flex', 'cursor-pointer'],
                              '',
                              '',
                              [
                                    { name: 'role', value: 'button' },
                                    { name: 'data-bs-toggle', value: 'dropdown' },
                                    { name: 'aria-expanded', value: 'false' },
                              ],
                        );

                        this.dropdown.element.addEventListener('click', () => {
                              this.toggleDropdown();
                        });

                        this.dropdownButton = new BaseComponent(
                              this.dropdown.element,
                              'button',
                              ['nav-link', 'display-9', 'd-flex'],
                              title,
                              '',
                        );

                        this.chevron = new BaseComponent(this.dropdown.element, 'i', [
                              'bi',
                              'bi-chevron-down',
                              'p-2',
                        ]);

                        this.dropdownMenu = new BaseComponent(navBarElement.element, 'ul', [
                              'dropdown-menu',
                              'menu',
                              'd-flex',
                              'flex-column',
                              'gap-2',
                        ]);

                        nestedElements.map(({ title, href }) => {
                              const nestedElement = new BaseComponent(
                                    this.dropdownMenu.element,
                                    'a',
                                    ['dropdown-item', 'text-decoration-none', 'display-9', 'me-6'],
                                    title,
                              );

                              // @ts-ignore
                              nestedElement.element.href = `#${href}`;
                        });
                  } else {
                        const link = new BaseComponent(
                              navBarElement.element,
                              'a',
                              ['nav-link', 'text-decoration-none', 'display-9'],
                              title,
                        );
                        // @ts-ignore
                        link.element.href = `#${href}`;
                  }
            });
      }
      toggleDropdown() {
            this.chevron.element.classList.toggle('bi-x-lg');
            this.chevron.element.classList.toggle('bi-chevron-down');
            this.dropdownMenu.element.classList.toggle('open');
      }
}
