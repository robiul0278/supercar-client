import useTitle from "../useTitle/useTitle";

const AddToys = () => {


  useTitle("Add A Toy");

    const handleAddToys = event => {
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
        const users = {picture, toyName, sellerName, email, category, price, rating, quantity, description }
        console.log(users)

        fetch('https://supercars-server.vercel.app/toys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
          // form.reset()
          alert("Product Added !")
          console.log(data)
        })
    }
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-6">Add Your Favorite Toy</h1>
        <form onSubmit={handleAddToys} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Picture URL of the toy
            </label>
            <input
              type="url"
              required
              id="picture"
              name="picture"
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
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
