import { BaseComponent } from 'components/BaseComponent';
import './styles.scss';
import arrow from 'assets/icons/arrow_down.svg';

export class OfferCardElement extends BaseComponent {
      constructor(parentNode, offers, className = []) {
            super(parentNode, 'div', className);

            const { image, title, description, href, titleLink } = offers;
            this.image = image;
            this.title = title;
            this.description = description;
            this.href = href;
            this.titleLink = titleLink;

            this.init();
      }

      init() {
            this.element.setAttribute('style', 'max-width:378px');
            this.icon = new BaseComponent(this.element, 'img', ['mb-5']).setAttribute(
                  'src',
                  this.image,
            );
            this.title = new BaseComponent(this.element, 'h3', ['mb-075'], this.title);
            this.description = new BaseComponent(
                  this.element,
                  'p',
                  ['description'],
                  this.description,
            );
            this.link = new BaseComponent(this.element, 'a', ['mt-8', 'text-green']);
            this.link.setAttribute('href', this.href);
            this.link.setContent(
                  `<span class="link-succes">${this.titleLink}</span><i class="bi bi-arrow-right ms-2 "></i>`,
            );
      }
}
