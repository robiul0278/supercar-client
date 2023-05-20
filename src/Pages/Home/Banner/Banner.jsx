import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";
const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex  justify-center items-center h-full bg-gradient-to-r from-gray-500">
            <div className="text-white space-y-7 text-center pl-12 w-2/3">
              <h1 className="text-5xl font-bold">
                WELCOME TO THE SUPERCARS!
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-blue-500 border-none mr-5">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img1} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img2} className="w-full" />
        </div>
      </div>
      <div className="flex bg-slate-400 justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
