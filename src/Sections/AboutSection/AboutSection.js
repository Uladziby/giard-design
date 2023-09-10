import { ASection } from "components/ASection/ASection";
import photo from 'assets/images/photoGallery/photo_10.jpg'
import { BaseComponent } from "components/BaseComponent";
import { sectionAboutUs } from "utils/constants";
import arrow from 'assets/icons/arrow_down.svg';


export class AboutSection extends ASection {
    constructor(parentNode, tagName = "section", className = [], id = null) {
        super(parentNode, tagName, className, id);
        this.leftPart = new BaseComponent(this.element, 'div', ['d-block']);
        this.rigthPart = new BaseComponent(this.element, 'div', ['d-flex', 'flex-column', 'justify-content-center', 'align-items-start', 'py-4', 'ps-13', 'pe-8']);

        this.init();

    }

    init() {
        const { title, subtitle, description, btnDetail } = sectionAboutUs;
        this.leftPart.setContent(`<img src=${photo} class=object-fit-cover" alt="${photo}" />`)

        this.titleElement = new BaseComponent(this.rigthPart.element, 'h7', ['title', 'text-light', 'fw-light'], title);
        this.subTitleElement = new BaseComponent(this.rigthPart.element, 'h2', ['sub-title', 'fs-2', 'text-light', 'pb-6'], subtitle);
        this.descriptionElement = new BaseComponent(this.rigthPart.element, 'p', ['description', 'text-light', 'fw-light', 'pb-10', 'ml-13'], description);
        this.buttonElement = new BaseComponent(this.rigthPart.element, 'link', ['btn', 'btn-outline-beige50', 'btn-lg', 'fs-9', 'lh-base']);
        this.buttonElement.setContent(`<span class='fw-light'>${btnDetail}</span><img class='px-2 arrow-right' style="fill:white" src=${arrow} alt="arrow" />`)
    }

}