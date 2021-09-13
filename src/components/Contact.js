import React from "react";
import { WorldMap } from "react-svg-worldmap";
import { dataMap } from "./data/data";
const Contact = () => {
  return (
    <>
      <header className="bg-slate dark:bg-gray-800 font-body overflow-x-hidden">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-softGold lg:text-4xl py-8">
                  Current coverage
                </h1>
                <ul className="text-softGold list-disc">
                  <p className="text-2xl my-4">Lorem ipsum dolor.</p>
                  <li className="list-inside hover:underline">united states</li>
                  <li className="list-inside hover:underline">canada</li>
                  <p className="text-2xl my-4">National</p>
                  <li className="list-inside hover:underline">Australia</li>
                  <li className="list-inside hover:underline">
                    United Kingdom
                  </li>
                  <li className="list-inside hover:underline">Ireland</li>
                  <li className="list-inside hover:underline">India</li>
                  <li className="list-inside hover:underline">New Zealand</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <WorldMap
                borderColor="#F5D197"
                color="#F5D197"
                backgroundColor="#212121"
                value-suffix=""
                size="responsive"
                data={dataMap}
                strokeOpacity=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Contact;
