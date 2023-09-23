import { sectionContact } from 'utils/constants';

export const ContactSection = (parentNode, className = [], id = null) => {
    const { title, subTitle, text, instagram } = sectionContact;

    const section = document.createElement('section');
    section.classList.add(...className);
    section.setAttribute('id', id);

    section.innerHTML += `
            <div class="contact d-sm-flex justify-content-around bg-green py-16 px-md-15">
                <div class="contact__title d-flex flex-column align-self-start">
                    <h2 class="display-6 text-light">${title}</h2>
                    <h2 class="display-6  text-light">${subTitle}</h2>
                </div>    
                <div class="contact__follow d-sm-flex align-items-center justife-content-center gap-5 flex-column">
                    <p  class="text-light fw-light h6">${text}</p>
                    <a class="btn btn-secondary bg-beige" href="${instagram}">Instagram</a>
                </div>
            </div>`;

    parentNode.appendChild(section);
};
