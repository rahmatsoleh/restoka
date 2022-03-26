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
      return new Error('Terjadi error pada restauran-api review');
    }
  }

  static async _sendRequest(url) {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Terjadi Error pada _sendRequest');
    }
  }
}

export default RestaurantApi;
