import { OfferSection } from './Sections/OfferSection/OfferSection';
import { HeaderComponent } from './Sections/HeaderComponent/HeaderComponent';
import { IntroSection } from './Sections/IntroSection/IntroSection';
import { ASection } from './components/ASection/ASection';
import { OurProjectSection } from './Sections/OurProjectSection/OurProjectSection';
import { dFlexStyles } from 'utils/constants';
import { AboutSection } from './Sections/AboutSection/AboutSection';

class Application {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.init();
  }

  init() {
    this.headerComponent = new HeaderComponent(this.parentNode, 'header', [
      'container-fluid',
      'd-flex',
      'align-items-center',
      'justify-content-between',
    ]);

    this.sectionIntro = new IntroSection(this.parentNode, [
      'container-fluid',
      'd-flex',
      'bg-primary',
      'gap-5',
    ]);

    this.sectionOurProjects = new OurProjectSection(this.parentNode, ['container', 'flex-column', 'ourprojects-section', 'bg-primary', 'position-relative', 'collapsing']);
    this.sectionOffer = new OfferSection(this.parentNode, ['container', 'flex-wrap', 'bg-beige50', ...dFlexStyles, 'flex-column']);
    this.sectionAbout = new AboutSection(this.parentNode, 'section', ['container', 'bg-secondary', 'gap-9', 'd-flex']);
    this.sectionContact = new ASection(this.parentNode, 'section', ['container']);
    this.footer = new ASection(this.parentNode, 'footer', ['container']);
  }
}

export default Application;
