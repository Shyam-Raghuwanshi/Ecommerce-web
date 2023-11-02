import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { FetchProductContext } from "../context/ProductContext";
import Pagination from "./Pagination";
import FilterProductNav from "./FilterProductNav";
export default function Clothes() {
  const { products, nextProductNum, initialProductNum } =
    useContext(FetchProductContext);

  return (
    <div
      className="bg-white"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="pb-6">
          <h2 className="hidden text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 sm:inline-block">
            Customers also purchased
          </h2>
          <FilterProductNav />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products
            ?.slice(initialProductNum, nextProductNum)
            .map((product, index) => {
              return (
                <Link key={index} to={`/products/${product.id}`}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      {product.random ? (
                        <img
                          src={`${product.image}${index}`}
                          alt={product?.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      ) : (
                        <img
                          src={`${product.image}`}
                          alt={product?.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      )}
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <Pagination />
    </div>
  );
}
