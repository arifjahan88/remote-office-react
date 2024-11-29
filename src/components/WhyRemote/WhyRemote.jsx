import { CiCircleCheck } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { TableItems } from "./TableItems";
import Button from "../common/Button";

const WhyRemote = () => {
  return (
    <section className="bg-lightsecondary">
      <div className="container py-5 md:py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        <table className="w-full border-collapse col-span-2 hidden md:block">
          <thead>
            <tr className="bg-[#F9FDDF] rounded-2xl">
              <th className="p-5 font-medium rounded-tl-2xl"></th>
              <th className="p-5 font-medium">Freelance Market</th>
              <th className="p-5 font-medium scale-[1.2] bg-white rounded-t-xl">
                <img src="/logo.png" alt="" />
              </th>
              <th className="p-5 font-medium">In-house</th>
              <th className="p-5 font-medium rounded-tr-2xl">Agencies</th>
            </tr>
          </thead>
          <tbody>
            {TableItems.map((item, index) => (
              <tr key={index} className={`border-b-4 border-secondary w-full`}>
                <td className="p-5 font-medium w-1/5 bg-[#F9FDDF]">{item.type}</td>
                <td className="p-5 text-center bg-[#ECF9A0]">
                  {typeof item["Freelance Market"] === "boolean" ? (
                    item["Freelance Market"] ? (
                      <CiCircleCheck className="h-5 w-5 mx-auto text-green-500" />
                    ) : (
                      <ImCross className="h-5 w-5 mx-auto text-red-500" />
                    )
                  ) : (
                    item["Freelance Market"]
                  )}
                </td>
                <td className="p-5 text-center w-1/5 bg-white scale-[1.2]">
                  {typeof item["Remote Office"] === "boolean" ? (
                    item["Remote Office"] ? (
                      <CiCircleCheck className="h-5 w-5 mx-auto text-green-500" />
                    ) : (
                      <ImCross className="h-5 w-5 mx-auto text-red-500" />
                    )
                  ) : (
                    item["Remote Office"]
                  )}
                </td>
                <td className="p-5 text-center w-1/5 bg-[#ECF9A0]">
                  {typeof item["In-house"] === "boolean" ? (
                    item["In-house"] ? (
                      <CiCircleCheck className="h-5 w-5 mx-auto text-green-500" />
                    ) : (
                      <ImCross className="h-5 w-5 mx-auto text-red-500" />
                    )
                  ) : (
                    item["In-house"]
                  )}
                </td>
                <td className="p-5 text-center w-1/5 bg-[#F9FDDF]">
                  {typeof item.Agencies === "boolean" ? (
                    item.Agencies ? (
                      <CiCircleCheck className="h-5 w-5 mx-auto text-green-500" />
                    ) : (
                      <ImCross className="h-5 w-5 mx-auto text-red-500" />
                    )
                  ) : (
                    item.Agencies
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="space-y-10 text-center lg:text-left order-first lg:order-last">
          <h1 className="font-extrabold text-2xl md:text-5xl leading-snug w-full lg:w-1/2">
            Why Remote Office?
          </h1>
          <p className="text-sm md:text-base">
            Remote Office helps you hire and manage top global talents. You can find, onboard, pay,
            and manage your remote workers using our platform. Remote Office also supports you with
            insights and feedback to optimise your remote team. We are your vHR for building and
            managing high-performing remote teams.
          </p>
          <Button text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default WhyRemote;
