import '../container/profile';

const AboutPage = {
  async render() {
    return `
      <article class="about">
        <h2>About Me</h2>
        <div class="container">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.about .container');
    container.innerHTML = '<my-profile></my-profile>';
  },
};

export default AboutPage;
