import Homepage from "./pages/Homepage";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

const Routest = [
    {
        path: '/',
        component: <Homepage />,
        name:'Homepage',
        id:'Home page',
        exact:true,
    },
    {
        path: '/Service',
        component: <Service />,
        name:'Service',
        id:'Service',
        exact:true,
    },
    {
        path: '/Team',
        component: <Team />,
        name:'Team',
        id:'Team',
        exact:true,
    },
    {
        path: '/Tastimonial',
        component: <Testimonial />,
        name:'Testimonial',
        id:'Testimonial',
        exact:true,
    },
]


export default Routest;