import UrlParser from '../../routes/url-parser';
import sendReview from '../../utils/send-review';

const DetailPage = {
  async render() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    return `<detail-restaurant data-id="${url}"></detail-restaurant>`;
  },

  async afterRender() {
    // untuk tombol favorit
  },
};

export default DetailPage;
