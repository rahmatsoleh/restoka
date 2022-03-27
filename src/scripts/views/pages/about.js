import '../../../styles/component/about.scss';

const AboutPage = {
  async render() {
    return `
      <article class="about">
        <h2>About Me</h2>
        <div class="container">
        <div class="img-thumb">
        <img src="images/rahmsol.jpg" alt="rahmat soleh"/>
      </div>
      <div class="bio">
        <h3>Rahmat Soleh</h3>
        <p>Fullstack Javascript<p>
        <a href="https://github.com/rahmatsoleh" target="_blank" rel="noopener">Visit Github</a>
      </div>
        </div>
      </article>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.about .container');
    container.innerHTML = `
      <div class="img-thumb">
        <img src="images/rahmsol.jpg" alt="rahmat soleh"/>
      </div>
      <div class="bio">
        <h3>Rahmat Soleh</h3>
        <p>Fullstack Javascript<p>
        <a href="https://github.com/rahmatsoleh" target="_blank" rel="noopener">Visit Github</a>
      </div>
    `;
  },
};

export default AboutPage;
