import brand1 from "../../../assets/brand/acura.svg";
import brand2 from "../../../assets/brand/bmw.svg";
import brand3 from "../../../assets/brand/chevrolet.svg";
import brand4 from "../../../assets/brand/dacia.svg";
import brand5 from "../../../assets/brand/jeep.svg";
import brand6 from "../../../assets/brand/honda.svg";
import brand7 from "../../../assets/brand/brand1.svg";
import brand8 from "../../../assets/brand/brand2.svg";
import brand9 from "../../../assets/brand/brand3.svg";
import brand10 from "../../../assets/brand/brand4.svg";
import brand11 from "../../../assets/brand/brand5.svg";
import brand12 from "../../../assets/brand/brand6.svg";
const BrandSection = () => {
  return (
    <div className="bg-blue-50 mt-4" data-aos="fade-up">
        <div className="p-10">
        <h1 className="text-4xl text-center font-bold">Our Partners</h1>
        <p className="text-center">- Only the best products -</p>
        </div>
      <div className="container p-10 mx-auto py-8">
        <div className="flex justify-between">
          <div className="">
            <img src={brand1} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand2} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand3} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand4} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand5} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand6} alt="Logo 1" className="w-20" />
          </div>
        </div>
        <div className="flex pt-5 justify-between">
          <div className="">
            <img src={brand7} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand8} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand9} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand10} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand11} alt="Logo 1" className="w-20" />
          </div>
          <div className="">
            <img src={brand12} alt="Logo 1" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
