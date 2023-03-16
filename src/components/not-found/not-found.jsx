import { Link } from 'react-router-dom';
import { AppRoute } from 'const';

const NotFound = () => (
  <>
    <h1>404</h1>
    <p>Страница не найдена</p>
    <Link to={AppRoute.Home}>Вернуться на главную</Link>
  </>
);

export default NotFound;
