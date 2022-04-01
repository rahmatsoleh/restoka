const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
  &#9825;
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
  &#10084;
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
