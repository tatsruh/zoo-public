import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import Error from "../assets/components/Error.tsx";
import {Description} from "../assets/components/layout/main/description.tsx";
import FeedPage from "../assets/components/layout/main/feed-page.tsx";
import Opinions from "../assets/components/layout/main/opinions.tsx";
import {WatchAnimal} from "../assets/components/layout/main/watch-animal.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {path: '/description', element: <Description id={'desc'}/>},
            {path: '/feed', element: <FeedPage id={'feed'}/>},
            {path: '/opinions', element: <Opinions id={'opinions'}/>},
            {path: '/watchanimal', element: <WatchAnimal id={'watch'}/>}

        ]
    }
])