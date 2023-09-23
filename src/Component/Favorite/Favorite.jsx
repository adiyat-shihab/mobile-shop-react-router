import { getData } from "../../../localStorage.js";
import { useEffect, useState } from "react";
import { FavoriteList } from "./FavoriteList.jsx";
import { useLoaderData } from "react-router-dom";

export const Favorite = () => {
  const getLocalData = getData();
  const [favoriteData, setFavoriteData] = useState(getLocalData);
  const loader = useLoaderData();
  const handleClearData = () => {
    return setFavoriteData([]);
  };
  console.log(favoriteData.length);
  useEffect(() => {
    if (favoriteData.length === 0) {
      localStorage.clear();
    }
  }, [favoriteData]);
  return (
    <>
      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleClearData}
        >
          Clear List
        </button>
        {getLocalData.length === 0 && (
          <h1
            className={"text-3xl h-[500px] flex justify-center items-center "}
          >
            No Data Found
          </h1>
        )}
        <div className={"grid grid-cols-2 justify-center items-center gap-6"}>
          {" "}
          {favoriteData.map((data) => (
            <FavoriteList data={data} loader={loader} />
          ))}
        </div>
      </div>
    </>
  );
};
