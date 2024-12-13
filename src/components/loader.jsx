// import { useEffect } from "react";

const PreLoader = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100 flex-col">
            <h1>Loading....</h1>
            <img src="/preload.gif" alt="loading" />

        </div>
    );
};
export default PreLoader;