import HomePage from '../src/scripts/views/pages/home-page';
import UrlParser from '../src/scripts/routes/url-parser';
import RestaurantApi from '../src/scripts/data/restaurant-api';

describe('Searching Restaurant', () => {
  const addFormSearch = () => {
    document.body.innerHTML = `
      <div class="loading"></div>
      <main>
        <article id="hero">
        <form>
          <input type="text" placeholder="Search Restaurant..."/>
          <button type="submit">Find Resto</button>
        </form>
        </article>
      </main>
    `;
  };

  beforeEach(() => {
    addFormSearch();
    HomePage.afterRender();
  });

  it('Should generate url serching when doing searching restaurant', async () => {
    const formSearch = document.querySelector('#hero form');
    const query = formSearch.querySelector('input');
    query.value = 'Rahmsol';
    formSearch.dispatchEvent(new Event('submit'));
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();

    expect(urlSplitter.id.toLowerCase()).toEqual(query.value.toLowerCase());
  });

  it('should display restaurant when the keyword is correct', async () => {
    const formSearch = document.querySelector('#hero form');
    const query = formSearch.querySelector('input');
    query.value = 'cafe';
    formSearch.dispatchEvent(new Event('submit'));
    const restaurant = await RestaurantApi.search(query.value);
    expect(restaurant.length).toBeTruthy();
  });

  it("Shouldn't display restaurant when keywords don't match", async () => {
    const formSearch = document.querySelector('#hero form');
    const query = formSearch.querySelector('input');
    query.value = 'abcdefghij';
    formSearch.dispatchEvent(new Event('submit'));
    const restaurant = await RestaurantApi.search(query.value);
    expect(restaurant.length).toBeFalsy();
  });

  it('Should return to the home page when not insert any keyword', async () => {
    const formSearch = document.querySelector('#hero form');
    formSearch.dispatchEvent(new Event('submit'));
    const urlSplitter = UrlParser.parseActiveWithoutCombiner();
    expect(urlSplitter).toEqual({
      resource: null,
      id: null,
      verb: null,
    });
  });
});
