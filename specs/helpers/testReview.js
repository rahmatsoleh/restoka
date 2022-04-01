import sendReview from '../../src/scripts/utils/send-review';

const testReview = async ({ id, name, message }) => {
  const formReview = document.querySelector('.form-review');
  const IdInput = formReview.querySelector('#id-resto');
  const nameInput = formReview.querySelector('#name');
  const messageInput = formReview.querySelector('#message');

  IdInput.value = id;
  nameInput.value = name;
  messageInput.value = message;

  await formReview.dispatchEvent(new Event('submit'));
  const responseReview = await sendReview(formReview);

  return responseReview;
};

export default testReview;
