import { useLoaderData } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const UpdateToys = () => {
    const toys = useLoaderData();
    const {picture, toyName, sellerName, email, category, price, rating, quantity, description, _id } = toys;

    useTitle("Update Toy")

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.sellerEmail.value;
        const category = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToys = {picture, toyName, sellerName, email, category, price, rating, quantity, description }
        console.log(updateToys)

        fetch(`https://supercars-server.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0) {
          alert("Your Toy Update Successfully !")

          } 
          console.log(data)
        })
    }

    return (
        <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl text-center font-bold mb-6">Update Toy</h1>
          <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Picture URL of the toy
              </label>
              <input
                type="text"
                id="picture"
                name="picture"
                defaultValue={picture}
                readOnly
                placeholder="photo url"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Toy Name</label>
              <input
                type="text"
                required
                id="name"
                name="toyName"
                defaultValue={toyName}
                readOnly
                placeholder="toy name"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Seller Name
              </label>
              <input
                type="text"
                required
                id="sellerName"
                name="sellerName"
                defaultValue={sellerName}
                readOnly
                placeholder="seller"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Seller Email
              </label>
              <input
                type="email"
                required
                id="sellerEmail"
                name="sellerEmail"
                defaultValue={email}
                readOnly
                placeholder="email"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Sub-category
              </label>
              <select
                id="subCategory"
                required
                name="subCategory"
                defaultValue={category}
                readOnly
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="SportsCars">Sports Cars Toys</option>
                <option value="TrucksToys">Trucks Toys</option>
                <option value="PoliceCars">Police Cars Toys</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Price</label>
              <input
                type="number"
                required
                id="price"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Rating</label>
              <input
                type="text"
                required
                id="rating"
                name="rating"
                defaultValue={rating}
                readOnly
                placeholder="rating"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Available Quantity
              </label>
              <input
                type="number"
                id="quantity"
                required
                name="quantity"
                defaultValue={quantity}
                placeholder="quantity"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Detail Description
              </label>
              <textarea
                id="description"
                required
                name="description"
                defaultValue={description}
                placeholder="description"
                rows="4"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateToys;