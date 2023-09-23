import { Heading } from "../Sub Component/Heading.jsx";
import { useLoaderData } from "react-router-dom";
import { Phone } from "./Phone/Phone.jsx";

export const Phones = () => {
  const loader = useLoaderData();

  return (
    <>
      <div>
        <Heading content={"All categories phones\n"} fontSize={"text-2xl"} />
        <div className={"grid grid-cols-3 gap-6"}>
          {loader.map((data, idx) => (
            <Phone data={data} key={idx} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
