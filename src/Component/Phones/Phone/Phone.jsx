import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { storeData, getData } from "../../../../localStorage.js";

// eslint-disable-next-line react/prop-types
export const Phone = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { image, phone_name, brand_name, price, id } = data;
  const handleStoreData = (data) => {
    storeData(data);
  };
  return (
    <>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
            alt={"imag"}
          />
        </div>
        <div className="p-6">
          <p className={"text-left"}>{brand_name}</p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>

            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
        </div>
        <div className={"flex gap-1.5 p-6"}>
          <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar />
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-100"
            type="button"
            onClick={() => handleStoreData(id)}
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </>
  );
};
