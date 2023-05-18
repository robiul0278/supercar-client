
const SportsCars = ({category}) => {

  const {picture,name,price,rating} = category;

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
            <button className="text-white font-bold rounded p-2 btn bg-green-600">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCars;
