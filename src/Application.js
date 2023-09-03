import { OfferSection } from './Sections/OfferSection/OfferSection';
import { HeaderComponent } from './Sections/HeaderComponent/HeaderComponent';
import { IntroSection } from './Sections/IntroSection/IntroSection';
import { ASection } from './components/ASection/ASection';
import { OurProjectSection } from './Sections/OurProjectSection/OurProjectSection';

class Application {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.init();
  }

  init() {
    this.headerComponent = new HeaderComponent(this.parentNode, 'header', [
      'container',
      'd-flex',
      'align-items-center',
      'justify-content-between',
    ]);
    this.sectionIntro = new IntroSection(this.parentNode, [
      'container',
      'd-flex',
      'bg-primary',
      'gap-5',
    ]);

    this.sectionOurProjects = new OurProjectSection(this.parentNode, ['flex-column', 'ourprojects-section', 'bg-primary', 'position-relative', 'collapsing']);
    this.sectionOffer = new OfferSection(this.parentNode, ['container']);
    this.sectionAbout = new ASection(this.parentNode, 'section', ['container']);
    this.sectionContact = new ASection(this.parentNode, 'section', ['container']);
    this.footer = new ASection(this.parentNode, 'footer', ['container']);
  }
}

export default Application;
