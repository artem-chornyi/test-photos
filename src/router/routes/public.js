import { Home, Photos, NotFound } from '../../pages';
import routeNames from './routeNames';

const routes = [
    {
        index: true,
        element: <Home/>,
    },
    {
        path: routeNames.PHOTOS,
        element: <Photos/>,
    },
    {
        path: routeNames.NOT_FOUND,
        element: <NotFound/>,
    }
];

export default routes;