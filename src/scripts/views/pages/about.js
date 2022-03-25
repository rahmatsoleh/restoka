const AboutPage = {
  async render() {
    console.log('Halaman About');
  },

  async afterRender() {
    console.log('Halaman seteleh about di render');
  },
};

export default AboutPage;
