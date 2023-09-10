import { dFlexStyles, sectionContact } from 'utils/constants';

export const ContactSection = (parentNode, className = [], id = null) => {
    const { title, subTitle, text, instagram } = sectionContact;

    const section = document.createElement('section');
    section.classList.add(...className);
    section.setAttribute('id', id);

    section.innerHTML += `
            <div class=" ${dFlexStyles.join(' ')} bg-green w-80 my-9 py-16 px-15 gap-9">
                <div class="w-75">
                    <h2 class="display-6 text-light ">${title}</h2>
                    <h2 class="display-6  text-light ">${subTitle}</h2>
                </div>    
                <div class="w-25">
                    <p  class="text-light fw-light h6 mb-4">${text}</p>
                    <a class="btn btn-primary" href="${instagram}">Instagram</a>
                </div>
            </div>`;

    parentNode.appendChild(section);
};
