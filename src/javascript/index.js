import '../sass/main.scss';
import hello from './vendor';

hello();

if (module.hot) {
  module.hot.accept();
}
