import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async list() {
    const data = await this._sendRequest(API_ENDPOINT.LIST);
    return data.restaurants;
  }

  static async detail(id) {
    const data = await this._sendRequest(API_ENDPOINT.DETAIL(id));
    return data.restaurant;
  }

  static async search(query) {
    const data = await this._sendRequest(API_ENDPOINT.SEARCH(query));
    return data.restaurants;
  }

  static async review(body, loading) {
    loading.sending.classList.remove('d-none');
    loading.netral.classList.add('d-none');
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const responseJson = await response.json();
      loading.sending.classList.add('d-none');
      loading.netral.classList.remove('d-none');
      return responseJson;
    } catch (error) {
      loading.sending.classList.add('d-none');
      loading.netral.classList.remove('d-none');
      swal('Uppss..!', error.message, 'error');
    }
  }

  static async _sendRequest(url) {
    const loading = document.querySelector('.loading');
    loading.classList.toggle('d-none');
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      loading.classList.toggle('d-none');
      return responseJson;
    } catch (error) {
      loading.classList.toggle('d-none');
      swal('Uppss..!', error.message, 'error');
    }
  }
}

export default RestaurantApi;
