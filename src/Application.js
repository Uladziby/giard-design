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
                  'header', 'my-4'
            ]);

            this.sectionIntro = new IntroSection(
                  this.parentNode,
                  ['intro', 'position-relative', 'bg-primary'],
                  'intro',
            );

            this.sectionOffer = new OfferSection(
                  this.parentNode,
                  ['offers', 'bg-beige50', 'pb-21', 'justify-content-center',
                  ],
                  'offers',
            );

            this.sectionAbout = new AboutSection(
                  this.parentNode,
                  ['aboutus', 'bg-secondary', 'gap-9'],
                  'aboutus',
            );

            this.sectionOurProjects = new OurProjectSection(
                  this.parentNode,
                  [
                        'ourprojects',
                        'container-fluid',
                        'd-flex',
                        'flex-column',
                        'position-relative',
                        'bg-primary',
                        'collapsing',
                        'z-3'
                  ],
                  'projects',
            );



            this.sectionContact = ContactSection(
                  this.parentNode,
                  ['bg-beige50', 'py-9', 'align-self-center', 'px-10'],
                  'contact',
            );

            this.footer = new FooterComponent(this.parentNode, 'footer', [
                  'bg-black',
                  'flex-column',
                  'px-10',
                  'py-11'
            ]);
      }
}

export default Application;
