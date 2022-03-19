import '../../../styles/component/footer-text.scss';

class FooterText extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>RESTOKA - FEBE F06</p>
            <p>&copy; Rahmat Soleh | MSIB-2 2022</p>
        `;
    }
}

customElements.define('footer-text', FooterText);