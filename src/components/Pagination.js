import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import { FetchProductContext } from "../context/ProductContext";
export default function Example() {
  const {
    products,
    nextProductNum,
    setNextProductNum,
    initialProductNum,
    setInitialProductNum,
  } = useContext(FetchProductContext);
  let [activePage, setActivePage] = useState(1);
  const handleNext = () => {
    setActivePage((prevPage) => prevPage + 1);
    setInitialProductNum(initialProductNum + 20);
    setNextProductNum(nextProductNum + 20);
  };

  const handlePrevious = () => {
    setActivePage((prevPage) => prevPage - 1);
    setInitialProductNum(initialProductNum - 20);
    setNextProductNum(nextProductNum - 20);
  };
  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center m-auto flex-col sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div> 
          <p
            className={`${
              products?.length === 0 ? "text-red-700 text-3xl" : ""
            } text-sm text-gray-700`}
          >
            Total Results: {" "} <span className="font-medium"></span>{" "}
            <span className="font-medium">{products?.length}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={activePage <= 1}
              onClick={handlePrevious}
              className="disabled:opacity-30  relative  inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: Math.ceil(products?.length / 20) }).map(
              (_, index) => (
                <div
                  key={index}
                  href="#"
                  aria-current="page"
                  className={`${
                    activePage === index + 1 ? "bg-blue-500 text-white" : ""
                  } relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {index + 1}
                </div>
              )
            )}

            <button
              onClick={handleNext}
              disabled={
                activePage >=
                Array.from({ length: Math.ceil(products?.length / 20) })
                  .length
              }
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-30"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
