import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Supercar | ${title}`;
    },[title])
};

export default useTitle;