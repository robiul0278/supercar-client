import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProviders";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="gap-5 justify-center align-middle flex">
        <button onClick={handleGoogle} className="btn bg-white hover:bg-white text-black md:w-44">
          <FcGoogle className="mr-2"></FcGoogle> Google
        </button>
      </div>
    );
};

export default SocialLogin;