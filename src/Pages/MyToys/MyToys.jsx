import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyToys = () => {
    const {user} = useContext(AuthContext); 
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])

    // console.log(myToys)
    return (
<div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl text-center font-bold mb-6">My Listed Toys</h1>
    <table className="min-w-full text-center bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Seller</th>
          <th className="py-2 px-4 border-b">Toy Name</th>
          <th className="py-2 px-4 border-b">Sub-category</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Available Quantity</th>
          <th className="py-2 px-4 border-b"></th>
          <th className="py-2 px-4 border-b"></th>
        </tr>
      </thead>
        {
            myToys.map(toys => (
                <tbody key={toys._id}>
                <tr>
                  <td className="py-4 px-4 border-b">{toys.name}</td>
                  <td className="py-4 px-4 border-b">Toy 1</td>
                  <td className="py-4 px-4 border-b">Sub-category A</td>
                  <td className="py-4 px-4 border-b">$10</td>
                  <td className="py-4 px-4 border-b">5</td>
                  <td className="py-4 px-4 border-b">
                    <button className="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none">Update</button>
                  </td>
                </tr>
              </tbody>
            ))
        }
    </table>
  </div>
</div>
    );
};

export default MyToys;