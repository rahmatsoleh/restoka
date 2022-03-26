import '../../../styles/component/like-button.scss';
import liked from '../../../public/images/heart-full.png';
import like from '../../../public/images/heart-circle.png';

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
    <img src="${like}" alt="like"/>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <img src="${liked}" alt="liked"/>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
