import '../../../styles/component/skip-content.scss';

class SkipContent extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <a href="#main" class="skip">Skip to content</a>
        `;
    }
}

customElements.define('skip-content', SkipContent);