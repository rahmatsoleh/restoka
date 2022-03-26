import UrlParser from '../../routes/url-parser';
import HomePage from './home-page';

const SearchPage = {
  async render() {
    return `
      <hero-element></hero-element>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const urlSplit = url.id.split('%20');
    const urlQuery = urlSplit.join(' ');
    const main = document.querySelector('main');
    const exploreElement = document.createElement('explore-restaurant');
    document.querySelector('#hero input').value = urlQuery;
    exploreElement.setAttribute('keyword', urlQuery);
    main.append(exploreElement);
    HomePage.afterRender();
  },
};

export default SearchPage;
