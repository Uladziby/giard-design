import { BaseComponent } from './BaseComponent';
import './styles.scss';

const close = 'close';
const open = 'open';

export class NavBar extends BaseComponent {
      constructor(parentNode = null, navBarItems, className = []) {
            super(parentNode, 'nav', className);

            this.isMenuOpen = false;
            this.isDropdownOpen = false;

            this.navbarToggler = new BaseComponent(
                  this.element,
                  'button',
                  ['navbar-toggler'],
                  '<span class="navbar-toggler-icon"></span>',
                  'navbarToggler',
                  [
                        { name: 'type', value: 'button' },
                        { name: 'data-bs-toggle', value: 'collapse' },
                        { name: 'data-bs-target', value: '#navbarContent' },
                        { name: 'aria-controls', value: 'navbarContent' },
                        { name: 'aria-expanded', value: 'false' },
                        { name: 'aria-label', value: 'Toggle navigation' }
                  ],
            );

            this.navBarContent = new BaseComponent(
                  this.element,
                  'div',
                  ['collapse', 'navbar-collapse'],
                  '',
                  'navbarContent',
            );

            this.navBar = new BaseComponent(this.navBarContent.element, 'ul', [
                  'navbar-nav',
                  'me-auto',
                  'mb-2',
                  'mb-lg-0',
                  'd-flex',
                  'justify-content-between',
                  'w-100',
            ]);

            navBarItems.map(item => {
                  const { title, href, nestedElements } = item;
                  const navBarElement = new BaseComponent(this.navBar.element, 'li', [
                        'nav-item',
                        'text-decoration-none',
                        'fw-normal',
                        'text-nowrap'
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

                              nestedElement.element.addEventListener('click', () => {
                                    this.isDropdownOpen = false;
                                    this.closeNestedMenu();

                              });
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



            window.addEventListener('click', (event) => {
                  if (!this.isDropdownOpen && (event.target === this.dropdownButton.element || event.target === this.chevron.element)) {

                        this.openDropdown();
                        this.openNestedMenu();
                  }
                  else if (event.target === this.navbarToggler.element) {
                        event.stopPropagation();
                        this.isMenuOpen ? this.closeDropdown() : this.openDropdown();
                  }
                  else {
                        this.closeDropdown();
                        this.closeNestedMenu();
                  }

            });
      }

      openDropdown() {
            this.dropdownMenu.element.classList.add('open');
            this.isMenuOpen = true;
      }

      closeDropdown() {
            this.dropdownMenu.element.classList.remove('open');
            this.isMenuOpen = false;
      }

      closeNestedMenu() {
            this.chevron.element.classList.remove('bi-x-lg');
            this.chevron.element.classList.add('bi-chevron-down');
            this.dropdownMenu.element.classList.remove('open');
            this.isDropdownOpen = false;
      }

      openNestedMenu() {
            this.chevron.element.classList.add('bi-x-lg');
            this.chevron.element.classList.remove('bi-chevron-down');
            this.dropdownMenu.element.classList.add('open');
            this.isDropdownOpen = true;

      }
}


