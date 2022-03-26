import UrlParser from '../../routes/url-parser';

const DetailPage = {
  async render() {
    // document.querySelector('main').innerHTML = '<loading-wait></loading-wait>';
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    const main = document.querySelector('main');
    main.innerHTML = `<detail-restaurant data-id="${url}"></detail-restaurant>`;
  },
};

export default DetailPage;
