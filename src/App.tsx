import './App.css'
import {Header} from "./assets/components/layout/header.tsx";
import {WatchAnimal} from "./assets/components/layout/main/watch-animal.tsx";
import {Description} from "./assets/components/layout/main/description.tsx";
import {Animals} from "./assets/components/layout/main/animals.tsx";
import FeedPage from "./assets/components/layout/main/feed-page.tsx";
import Opinions from "./assets/components/layout/main/opinions.tsx";
import {Footer} from "./assets/components/layout/footer.tsx";

function App() {

    return <>
        <Header></Header>
        <WatchAnimal></WatchAnimal>
        <Description></Description>
        <Animals></Animals>
        <FeedPage></FeedPage>
        <Opinions></Opinions>;
        <Footer></Footer>

    </>
}

export default App
