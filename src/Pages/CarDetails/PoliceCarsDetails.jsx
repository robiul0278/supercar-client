import { useLoaderData } from "react-router-dom";

const PoliceCarsDetails = () => {
  const police = useLoaderData();
  const { picture, name, price, rating, description } = police;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 h[calc(100-vh-28)]">
      <div>
        <img className="rounded" src={picture} alt="" />
      </div>
      <div className="grid justify-items-start py-10">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p>{description}</p>
        <h4 className="text-4xl">{price}</h4>
        <h4 className="">rating: {rating}</h4>
      </div>
    </div>
  );
};

export default PoliceCarsDetails;