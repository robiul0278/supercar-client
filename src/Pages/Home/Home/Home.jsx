import Categories from "../../Categories/Categories";
import Banner from "../Banner/Banner";
import MyPhotoGallery from "../PhotoAlbum/MyPhotoGallery";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <MyPhotoGallery></MyPhotoGallery>
         <Categories></Categories>
        </div>
    );
};

export default Home;