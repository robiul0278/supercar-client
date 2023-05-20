import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const MyToys = () => {
    const {user} = useContext(AuthContext); 
    const [myToys, setMyToys] = useState([])

    useTitle("My Toys")

    const url = `https://supercars-server.vercel.app/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])

    const handleDelete = id => {
      const proceed = confirm('Are You Sure ?')
      if (proceed) {
        fetch(`https://supercars-server.vercel.app/toys/${id}`,{
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0) {
            alert("Delete Successfully!")
            const remaining = myToys.filter(toys => toys._id !== id);
            setMyToys(remaining)
          }
          console.log(data)
        })
      }
    }

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
                  <td className="py-4 px-4 border-b">{toys.sellerName}</td>
                  <td className="py-4 px-4 border-b">{toys.toyName}</td>
                  <td className="py-4 px-4 border-b">{toys.category}</td>
                  <td className="py-4 px-4 border-b">${toys.price}</td>
                  <td className="py-4 px-4 border-b">{toys.quantity}</td>
                  <td className="py-4 px-4 border-b">
                    <button onClick={() => handleDelete(toys?._id)} className="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <Link to={`/update/${toys?._id}`} className="text-blue-500 hover:text-blue-700 focus:outline-none">Update</Link>
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