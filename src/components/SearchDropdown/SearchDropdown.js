import { BaseComponent } from 'components/BaseComponent';
import search from 'assets/icons/search.svg';

export class SearchDropdown extends BaseComponent {
      constructor(parentNode = null) {
            super(parentNode, 'div', [
                  'd-inline-flex',
                  'z-index-1',
                  'rounded-pill',
                  'btn',
                  'position-relative',
                  'text-align-center',
                  'searchBar',
            ]);
            this.isDropdownOpen = false;

            if (parentNode) {
                  this.init();
            }
      }

      init() {
            this.searchInput = new BaseComponent(
                  this.element,
                  'input',
                  ['border-0', 'searchInput'],
                  '',
                  '',
                  [{ name: 'placeholder', value: 'wyszukiwanie...' }],
            );
            this.searchButton = new BaseComponent(
                  this.element,
                  'button',
                  ['searchButton', 'rounded-circle', 'px-2', 'py-1', 'border-0'],
                  `<img  src=${search} alt="search" />`,
            );

            this.searchButton.element.addEventListener('click', () => {
                  this.searchInput.element.classList.toggle('open');
                  this.element.classList.toggle('open');

                  this.isDropdownOpen
                        ? this.searchButton.setContent(`<img src=${search} alt="search" />`)
                        : this.searchButton.setContent(`<i class="bi bi-x-lg" alt="search" ></i>`);
                  this.isDropdownOpen = !this.isDropdownOpen;
            });
      }
}
