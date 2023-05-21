import { useLoaderData } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const AllToyDetails = () => {
    const toys = useLoaderData()
    const { picture, toyName, price, rating, description } = toys;
    console.log(toys)

    useTitle("Toy Details")

    return (
        <div className="grid my-16 bg-gray-100 grid-cols-1 md:grid-cols-2 gap-10 p-5 h[calc(100-vh-28)]">
        <div>
          <img className="rounded" src={picture} alt="" />
        </div>
        <div className="grid justify-items-start py-10">
          <h1 className="text-5xl font-bold">{toyName}</h1>
          <p>{description}</p>
          <h4 className="text-4xl">${price}</h4>
          <h4 className="">rating: {rating}</h4>
        </div>
      </div>
    );
};

export default AllToyDetails;