import '../../../styles/component/about.scss';

class Profile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="img-thumb">
      <img src="images/rahmsol.jpg" alt="rahmat soleh"/>
    </div>
    <div class="bio">
      <h3>Rahmat Soleh</h3>
      <p>Fullstack Javascript<p>
      <a href="https://github.com/rahmatsoleh" target="_blank" rel="noopener">Visit Github</a>
    </div>
    `;
  }
}

customElements.define('my-profile', Profile);
