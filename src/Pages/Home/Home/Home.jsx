import Categories from "../../Categories/Categories";
import Banner from "../Banner/Banner";
import BrandSection from "../BrandSection/BrandSection";
import MyPhotoGallery from "../PhotoAlbum/MyPhotoGallery";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <WelcomeSection></WelcomeSection>
         <MyPhotoGallery></MyPhotoGallery>
         <Categories></Categories>
         <BrandSection></BrandSection>
        </div>
    );
};

export default Home;