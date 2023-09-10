import { OfferSection } from './Sections/OfferSection/OfferSection';
import { HeaderComponent } from './Sections/HeaderComponent/HeaderComponent';
import { IntroSection } from './Sections/IntroSection/IntroSection';
import { ASection } from './components/ASection/ASection';
import { OurProjectSection } from './Sections/OurProjectSection/OurProjectSection';
import { dFlexStyles } from 'utils/constants';
import { AboutSection } from './Sections/AboutSection/AboutSection';
import { ContactSection } from './Sections/ContactSection/ContactSection';
import { FooterComponent } from './Sections/FooterComponent/FooterComponent';

class Application {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.init();
  }

  init() {
    this.headerComponent = new HeaderComponent(this.parentNode, 'header', [
      'd-flex',
      'align-items-center',
      'justify-content-between',
    ]);

    this.sectionIntro = new IntroSection(this.parentNode, ['bg-primary', 'gap-5']);

    this.sectionOffer = new OfferSection(this.parentNode, [
      'flex-wrap',
      'bg-beige50',
      ...dFlexStyles,
      'flex-column',
    ]);

    this.sectionOurProjects = new OurProjectSection(this.parentNode, [
      'flex-column',
      'ourprojects-section',
      'bg-primary',
      'position-relative',
      'collapsing',
    ]);



    this.sectionAbout = new AboutSection(
      this.parentNode,
      'section',
      ['bg-secondary', 'gap-9', 'd-flex'],
      'aboutus',
    );

    this.sectionContact = ContactSection(this.parentNode,
      ['container', 'contact-section', 'bg-beige50', ...dFlexStyles],
      'aboutus',
    );

    this.footer = new FooterComponent(this.parentNode, 'footer', ['container', 'bg-black', 'py-11', 'px-26', ...dFlexStyles, 'flex-column']);
  }
}

export default Application;
