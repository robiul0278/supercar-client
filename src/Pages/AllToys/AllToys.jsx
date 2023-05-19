import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-6">All Toys</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  Seller
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  Toy Name
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  Sub-category
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  Price
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  Available Quantity
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                  View Details
                </th>
              </tr>
            </thead>
            {allToys.map((toys) => (
                <tbody key={toys._id}>
                  <tr>
                    <td className="py-2 px-4 border-b">{toys.sellerName}</td>
                    <td className="py-2 px-4 border-b">{toys.toyName}</td>
                    <td className="py-2 px-4 border-b">{toys.category}</td>
                    <td className="py-2 px-4 border-b">$ {toys.price}</td>
                    <td className="py-2 px-4 border-b">{toys.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;