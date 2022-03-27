import '../../../styles/component/404.scss';

const PageNotFound = {
  async render() {
    return `
      <div class="not-found"></div>
    `;
  },
  async afterRender() {
    const notFound = document.querySelector('.not-found');
    notFound.innerHTML = '<img src="images/404.png" alt="page not found" />';
  },
};

export default PageNotFound;
