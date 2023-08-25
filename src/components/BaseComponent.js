export class BaseComponent {
      constructor(parentNode = null, tagName = 'div', className = [], content = '', id = '') {
            this.parentNode = parentNode;
            this.tagName = tagName;
            this.className = className;
            this.id = id;
            this.content = content;
            this.element = null;

            if (parentNode) this.render();
      }

      render() {
            this.element = document.createElement(this.tagName);
            this.element.classList.add(...this.className);

            if (this.content) this.element.innerHTML = `${this.content}`;

            if (this.id) this.element.id = this.id;

            this.parentNode.appendChild(this.element);
      }

      remove() {
            this.parentNode.removeChild(this.element);
      }

      setContent(content) {
            this.content = content;
            this.element.innerHTML = `${this.content}`;
      }
}
