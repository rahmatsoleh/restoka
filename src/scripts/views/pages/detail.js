import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailPage = {
  async render() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    return `<detail-restaurant data-id="${url}"></detail-restaurant>
    <div class="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      id: url,
    });
  },
};

export default DetailPage;
