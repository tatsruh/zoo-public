import './App.css'
import {Header} from "./assets/components/layout/header.tsx";
import {WatchAnimal} from "./assets/components/layout/main/watch-animal.tsx";
import {Description} from "./assets/components/layout/main/description.tsx";
import {Animals} from "./assets/components/layout/main/animals.tsx";
import FeedPage from "./assets/components/layout/main/feed-page.tsx";
import Opinions from "./assets/components/layout/main/opinions.tsx";
import {Footer} from "./assets/components/layout/footer.tsx";
import {useLocation} from "react-router";
import {useEffect} from "react";

function App() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return <>
        <Header></Header>
        <WatchAnimal id="watch"></WatchAnimal>
        <Description id="description"></Description>
        <Animals id="animals"></Animals>
        <FeedPage id="feed"></FeedPage>
        <Opinions id="opinions"></Opinions>;
        <Footer id="footer"></Footer>

    </>
}

export default App
