import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredToys = allToys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetch("https://supercars-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);



  useTitle("All-Toys");


  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-6">All Toys</h1>
        <div>
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="mb-4 px-4 py-2 w-full rounded-md"
        />
            {filteredToys.length === 0 && <p>No matching toys found.</p>}
        </div>
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
            {filteredToys.map((toys) => (
                <tbody key={toys._id}>
                  <tr>
                    <td className="py-2 px-4 border-b">{toys.sellerName}</td>
                    <td className="py-2 px-4 border-b">{toys.toyName}</td>
                    <td className="py-2 px-4 border-b">{toys.category}</td>
                    <td className="py-2 px-4 border-b">${toys.price}</td>
                    <td className="py-2 px-4 border-b">{toys.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      <Link to={`/alltoydetails/${toys?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        View Details
                      </Link>
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
