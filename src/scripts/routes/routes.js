import AboutPage from '../views/pages/about';
import FavoritePage from '../views/pages/favorite';
import DetailPage from '../views/pages/detail';
import HomePage from '../views/pages/home-page';
import SearchPage from '../views/pages/search-page';
import PageNotFound from '../views/pages/page-not-found';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
  '/search/:id': SearchPage,
  '/404': PageNotFound,
};

export default routes;
