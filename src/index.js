import Application from './Application.js';
import './scss/styles.scss';

window.onload = () => {
      const appElement = document.getElementById('app');
      if (!appElement) throw Error('App root element');
      new Application(appElement);
};
