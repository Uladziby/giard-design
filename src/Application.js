import { OfferSection } from './Sections/OfferSection/OfferSection';
import { HeaderComponent } from './Sections/HeaderComponent/HeaderComponent';
import { IntroSection } from './Sections/IntroSection/IntroSection';
import { OurProjectSection } from './Sections/OurProjectSection/OurProjectSection';
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
                  'mx-7', 'header',
            ]);

            this.sectionIntro = new IntroSection(
                  this.parentNode,
                  ['intro', 'position-relative', 'bg-primary', 'gap-5'],
                  'intro',
            );

            this.sectionOffer = new OfferSection(
                  this.parentNode,
                  ['offers', 'bg-beige50', 'pb-21', 'justify-content-center',
                  ],
                  'offers',
            );

            this.sectionOurProjects = new OurProjectSection(
                  this.parentNode,
                  [
                        'ourprojects-section',
                        'flex-column',
                        'bg-primary',
                        'position-relative',
                        'collapsing',
                  ],
                  'projects',
            );

            this.sectionAbout = new AboutSection(
                  this.parentNode,
                  ['bg-secondary', 'gap-9', 'd-flex'],
                  'aboutus',
            );

            this.sectionContact = ContactSection(
                  this.parentNode,
                  ['container', 'contact-section', 'bg-beige50'],
                  'contact',
            );

            this.footer = new FooterComponent(this.parentNode, 'footer', [
                  'bg-black',
                  'py-11',
                  'px-26',
                  'flex-column',
            ]);
      }
}

export default Application;
