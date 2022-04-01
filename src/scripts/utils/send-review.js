import swal from 'sweetalert';
import RestaurantApi from '../data/restaurant-api';
import { reviews } from '../views/template/detail-element';

const reloadReviews = async (response) => {
  const customerReviews = document.querySelector('.customer-review ul');
  customerReviews.innerHTML = reviews(response.customerReviews);
};

const afterSending = async (response, element) => {
  element.querySelector('#name').value = '';
  element.querySelector('#message').value = '';
  const responseApi = response;

  if (!responseApi.error) {
    swal(responseApi.message, 'Message sent successfully', 'success')
      .then(reloadReviews(responseApi));
  }
};

const sendReview = async (element) => {
  const id = element.querySelector('#id-resto').value;
  const name = element.querySelector('#name').value;
  const review = element.querySelector('#message').value;
  const loadingElement = {
    sending: element.querySelector('.sending'),
    netral: element.querySelector('.netral'),
  };
  const body = { id, name, review };

  const response = await RestaurantApi.review(body, loadingElement);
  afterSending(response, element);
  return response;
};

export default sendReview;
