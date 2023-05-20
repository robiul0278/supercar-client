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
    <div className="gallery bg-white p-5">
        <div className="text-center p-12">
        <h1 className="text-4xl font-bold ">Discover Our Gallery</h1>
        <p className="">Discover Our Exciting Toy Collection and Ignite Your Imagination</p>
        </div>
      <div className="grid-container columns-3 md:columns-5">
        <div>
          <img className="grid-item" src={g10} />
        </div>
        <div>
          <img className="grid-item" src={g2} alt="" />
        </div>
        <div>
          <img className="grid-item" src={g7} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g4} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g8} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g12} alt="" />
        </div>
        <div>
          <img className="grid-item" src={g5} alt="" />
        </div>
        <div>
          <img className="grid-item" src={g3} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g9} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g1} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g11} alt="" />
        </div>
        <div>
          <img className="grid-item " src={g6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyPhotoGallery;
