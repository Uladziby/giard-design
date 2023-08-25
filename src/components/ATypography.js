export class ATypography {
      constructor(parentNode = null, tag, className = []) {
            this.parentNode = parentNode;
            this.className = className;
            this.element = document.createElement(tag);
            this.applyStyles();

            if (parentNode) this.render();
      }

      applyStyles() {
            this.element.classList.add(...this.className);
      }

      setText(text) {
            this.text = text;
            this.element.innerText = this.text;
      }

      render() {
            this.parentNode.element.appendChild(this.element);
      }
}
