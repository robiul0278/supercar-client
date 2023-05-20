import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Supercar`;
    },[title])
};

export default useTitle;