import HomePage from '../pages/HomePage';
import Recruitment from '../pages/Recruitment';
import DetailRecruitment from '../pages/DetailRecruitment';
import AboutPage from '../pages/AboutPage';
const indexRoute = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/recruitment",
        exact: true,
        component: Recruitment
    },
    {
        path: "/recruitment/detail",
        exact: true,
        component: DetailRecruitment
    },
    {
        path: "/about",
        exact: false,
        component: AboutPage
    },
    {
        path: "/recruitment/:id.:urlName",
        exact: false,
        component: DetailRecruitment
    }
]

export default indexRoute;