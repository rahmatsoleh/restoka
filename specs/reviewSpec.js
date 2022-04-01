import 'jasmine-ajax';
import RestaurantApi from '../src/scripts/data/restaurant-api';
import { reviewElement } from '../src/scripts/views/template/detail-element';
import testReview from './helpers/testReview';

describe('Review Restaurant', () => {
  const createFormReview = async () => {
    const main = document.querySelector('main');
    const restaurant = await RestaurantApi.detail('fnfn8mytkpmkfw1e867');
    main.innerHTML = reviewElement(restaurant);
    const submit = main.querySelector('.form-review form');
    submit.addEventListener('subit', (event) => {
      event.preventDefault();
    });
  };

  beforeEach(async () => {
    document.body.innerHTML = '<div class="loading"></div><main></main>';

    jasmine.Ajax.install();
    await createFormReview();
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  it('Should be able to provide a review when all inputs are filled in', async () => {
    const responseReview = await testReview({
      id: 'fnfn8mytkpmkfw1e867',
      name: 'test',
      message: 'recomended',
    });

    const reviews = document.querySelectorAll('.customer-review ul li');

    expect(responseReview.error).toBeFalsy();
    expect(responseReview.customerReviews.length).toEqual(reviews.length);
  });

  it('Should not be able to display a review if the name is not filled', async () => {
    const responseReview = await testReview({
      id: 'fnfn8mytkpmkfw1e867',
      name: '',
      message: 'recomended',
    });

    expect(responseReview.error).toBeTruthy();
  });

  it('Should not be able to display a review if the message is not filled', async () => {
    const responseReview = await testReview({
      id: 'fnfn8mytkpmkfw1e867',
      name: 'test',
      message: '',
    });

    expect(responseReview.error).toBeTruthy();
  });

  it('Should not be able to display a review if the id restaurant is not filled', async () => {
    const responseReview = await testReview({
      id: '',
      name: 'test',
      message: 'recomended',
    });

    expect(responseReview.error).toBeTruthy();
  });

  it('Should not be able to show preview if restaurant ID is wrong', async () => {
    const responseReview = await testReview({
      id: 'abcdefghijklmn',
      name: 'test',
      message: 'recomended',
    });

    expect(responseReview.error).toBeTruthy();
  });
});
