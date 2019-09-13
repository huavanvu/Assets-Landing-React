import HomePage from '../pages/HomePage';
import Recruitment from '../pages/Recruitment';
import DetailRecruitment from '../pages/DetailRecruitment';
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
        path: "/detailrecruitment",
        exact: true,
        component: DetailRecruitment
    }
]

export default indexRoute;