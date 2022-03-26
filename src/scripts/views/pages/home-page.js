const HomePage = {
  async render() {
    return `
       <hero-element></hero-element>
       <category-food></category-food>
       <slogan-comp></slogan-comp>
       <explore-restaurant></explore-restaurant>
     `;
  },

  async afterRender() {
    const heroSearch = document.querySelector('#hero form');
    heroSearch.addEventListener('submit', (event) => {
      const query = heroSearch.querySelector('input').value;
      event.preventDefault();
      const home = '#/';
      const url = `#/search/${query}`;
      (query) ? location.href = url : location.href = home;
    });
  },
};

export default HomePage;
