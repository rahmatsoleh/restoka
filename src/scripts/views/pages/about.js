const AboutPage = {
  async render() {
    // document.querySelector('main').innerHTML = '<loading-wait></loading-wait>';
  },

  async afterRender() {
    console.log('Halaman seteleh about di render');
  },
};

export default AboutPage;
