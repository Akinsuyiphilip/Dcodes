import Homepage from "./pages/Homepage";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

const Routest = [
    {
        path: '/',
        component: <Homepage />
    },
    {
        path: '/Service',
        component: <Service />
    },
    {
        path: '/Team',
        component: <Team />
    },
    {
        path: '/Testimonial',
        component: <Testimonial />
    }
]


export default Routest;