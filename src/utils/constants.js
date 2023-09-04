import eye_icon from 'assets/icons/eye_icon.svg';
import pencil_icon from 'assets/icons/pencil_icon.svg';
import stars_icon from 'assets/icons/stars_icon.svg';

export const sectionIntro = {
      title: 'Nowoczesna aranżacja Twojego ogrodu',
      description:
            'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
      button_contact: 'Skontaktuj się z nami',
      button_portfolio: 'Zobacz nasze realizacje',
};

export const sectionOffer = {
      title: 'Działamy kompleksowo',
      description:
            'Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. ',

      offers: [
            {
                  image: pencil_icon,
                  title: 'Projekty',
                  description:
                        'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
                  titleLink: 'Dowiedz się więcej',
                  href: '/projects',
            },
            {
                  image: eye_icon,
                  title: 'Wizualizacje',
                  description:
                        'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.',
                  titleLink: 'Dowiedz się więcej',
                  href: '/projects',
            },
            {
                  image: stars_icon,
                  title: 'Realizacje',
                  description:
                        'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
                  titleLink: 'Zobacz nasze realizacje',
                  href: '/projects',
            },
      ],
};

export const sectionOurProjects = {
      title: 'Realizacje',
      subTitle: 'Nasze projekty',
      btnShow: 'Rozwiń',
      btnHide: 'Zwiń',
};

export const sectionAboutUs = {
      title: 'O firmie',
      subtitle: 'Tworzymy z <i>pasją</i>',
      description:
            'Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.',
      btnDetail: 'Poznaj nas bliżej',
};

export const navBar = [
      {
            title: 'Oferta',
            nestedElements: [
                  { title: 'Ogrody tematyczne', href: 'themedgardens' },
                  { title: 'Wyposażenie ogrodu', href: 'gardenequipment' },
                  { title: 'Dziecko w ogrodzie', href: 'kidgarden' },
                  { title: 'Ogród ekologiczny', href: 'ecogarden' },
                  { title: 'Sad i warzywnik', href: 'sadiwarzywnik' },
            ],
      },
      { title: 'O firmie', href: 'aboutus' },
      { title: 'Realizacje', href: 'projects' },
      { title: 'Kontakt', href: 'contact' },
];

export const stylesSubTitle = ['fs-6', 'lh-base'];

export const dFlexStyles = ['d-flex', 'justify-content-center', 'align-items-center'];
