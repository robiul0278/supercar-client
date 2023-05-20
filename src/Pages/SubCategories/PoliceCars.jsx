import { Link } from "react-router-dom";

const PoliceCars = ({category}) => {
    const {picture,name,price,rating, _id} = category;
  return (
    <div >
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
          className=" object-cover w-96"
            src={picture}
            alt="police car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/police/${_id}`} className="btn hover:bg-blue-600 bg-blue-500 border-none mr-5">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceCars;
