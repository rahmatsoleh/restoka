import 'jasmine-ajax';
import RestaurantApi from '../src/scripts/data/restaurant-api';

describe('Show restaurant data from API', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="loading"></div>';
    jasmine.Ajax.install();
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  it('Should Show list restaurants from API', async () => {
    const listRestaurant = await RestaurantApi.list();

    expect(listRestaurant.length).toEqual(20);
  });

  it('Should Show detail restaurant when id restaurant is valid', async () => {
    const id = 'rqdv5juczeskfw1e867';
    const restaurantDetail = await RestaurantApi.detail(id);

    expect(restaurantDetail.name).toEqual('Melting Pot');
  });

  it('Cek error', async () => {
    const id = 'rqdv5juczeskfw1e86';
    const restaurantDetail = await RestaurantApi.detail(id);

    expect(restaurantDetail.name).toEqual(undefined);
  });
});
