import instaPic from '../../../assets/socialmedias/instagram.png'
import twitterPic from '/public/twitter.png'
import facebookPic from '/public/facebook.png'
import youtubePic from '/public/youtube.png'
import Media from "./Media.tsx";

const SocialMedias = () => {
    type mediaItem = {
        url: string,
        name: string,
        id: number,
    }
    const mediaArray: mediaItem[] = [
        {name: 'Twitter', url: twitterPic, id: 1},
        {name: 'Insagram', url: instaPic, id: 2},
        {name: 'Youtube', url: youtubePic, id: 3},
        {name: 'Facebook', url: facebookPic, id: 4},

    ]
    return (
        <div>
            {mediaArray.map((item: mediaItem) => (
                <Media key={item.id} name={item.name} url={item.url} />
            ))}
        </div>
    );
};

export default SocialMedias;