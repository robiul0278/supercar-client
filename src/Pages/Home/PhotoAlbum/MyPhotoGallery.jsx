import "./MyPhotoGallery.css";

import g1 from "../../../assets/PhotoGallery/g1.jpg";
import g2 from "../../../assets/PhotoGallery/g2.jpg";
import g3 from "../../../assets/PhotoGallery/g3.jpg";
import g4 from "../../../assets/PhotoGallery/g4.jpg";
import g5 from "../../../assets/PhotoGallery/g5.jpg";
import g6 from "../../../assets/PhotoGallery/g6.jpg";
import g7 from "../../../assets/PhotoGallery/g7.jpg";
import g8 from "../../../assets/PhotoGallery/g8.jpg";
import g9 from "../../../assets/PhotoGallery/g9.jpg";
import g10 from "../../../assets/PhotoGallery/g10.jpg";
import g11 from "../../../assets/PhotoGallery/g11.jpg";
import g12 from "../../../assets/PhotoGallery/g12.jpg";

const MyPhotoGallery = () => {
  return (
    <div className="gallery bg-gray-100 pb-5">
        <div className="text-center p-12">
        <h1 className="text-4xl font-bold ">Gallery Section</h1>
        </div>
      <div className="grid-container">
        <div>
          <img className="grid-item grid-item-1" src={g10} />
        </div>
        <div>
          <img className="grid-item grid-item-2" src={g2} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-3" src={g7} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-4" src={g4} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-5" src={g8} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-6" src={g12} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-7" src={g5} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-8" src={g3} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-9" src={g9} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-10" src={g1} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-10" src={g11} alt="" />
        </div>
        <div>
          <img className="grid-item grid-item-10" src={g6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyPhotoGallery;
