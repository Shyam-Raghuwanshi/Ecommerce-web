import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FetchProductContext } from "../context/ProductContext";
import ProductData from "../products.json";
const FilterProductNav = () => {
  const { setProducts, products, productCatagoryArr } =
    useContext(FetchProductContext);
  const [ranges, setRanges] = useState([]);
  const [category, setCategory] = useState(null);

  // filter by category
  const handleFilterProduct = (categoryValue) => {
    if (categoryValue === "All") {
      return setProducts(ProductData.products);
    }
    const FilteredProduct = ProductData.products.filter((product) => {
      return product.category === categoryValue;
    });
    setProducts(FilteredProduct);
  };
  const setRangesfun = () => {
    let maxPrice = 0;
    products?.forEach((product) => {
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    });
    let rangeArr = [];
    for (let i = 0; i < maxPrice; i += 100) {
      const element = `${i} - ${i + 100}`;
      rangeArr.push(element);
    }
    setRanges(rangeArr);
  };
  useEffect(() => {
    setRangesfun();
  }, [productCatagoryArr]);

  const handleRanges = (range) => {
    const filterProducts = products.filter((product) => {
      return (
        product.price >= parseInt(range.split("-")[0]) &&
        product.price <= parseInt(range.split("-")[1])
      );
    });
    setProducts(filterProducts);
  };
  return (
    <>
      <Menu as="div" className="absolute inline-block right-5">
        <div className="z-[999] relative">
          <Menu.Button
            data-aos="fade-down"
            data-aos-delay="1200"
            data-aos-duration="1000"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {category
              ? category.length > 8
                ? category.slice(0, 8) + ".."
                : category
              : "Category"}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-y-scroll overflow-x-hidden">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      handleFilterProduct("All");
                      setCategory("Category");
                    }}
                    href="#"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    } block px-4 py-2 text-sm`}
                  >
                    <b>All Products</b>
                  </a>
                )}
              </Menu.Item>
              {productCatagoryArr?.map((category, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      onClick={() => {
                        handleFilterProduct(category);
                        setCategory(category);
                      }}
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                      } block px-4 py-2 text-sm`}
                    >
                      {category}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Menu as="div" className="absolute inline-block right-36">
        <div className="z-[999] relative">
          <Menu.Button
            data-aos="fade-down"
            data-aos-delay="1200"
            data-aos-duration="1000"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Price
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-y-auto overflow-x-hidden">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setProducts(products);
                    }}
                    href="#"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    } block px-4 py-2 text-sm`}
                  >
                    <b>Clear Filter</b>
                  </a>
                )}
              </Menu.Item>
              {ranges?.map((range, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      onClick={() => {
                        handleRanges(range);
                      }}
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                      } block px-4 py-2 text-sm`}
                    >
                      {range}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default FilterProductNav;
