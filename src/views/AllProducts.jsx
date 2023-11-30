import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Add this import

export default function AllProducts() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Method to set data in cookies which will expire in 7 days
  const SetCookie = () => {
    Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
      expires: 7,
    });
  };

  // Method to get data from cookies
  const GetCookie = () => {
    alert(Cookies.get("token"));
  };

  // Method to remove data from cookies
  const RemoveCookie = () => {
    Cookies.remove("token");
  };

  // Views
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h6>1. Click on Set Cookie to set data in cookies</h6>
        <h6>2. Click on Get Cookie to display the data</h6>
        <h6>3. Click on Remove Cookie to remove data from cookies</h6> {/* Fix typo here */}
        <button onClick={SetCookie}>Set Cookie</button>
        <button onClick={GetCookie}>Get Cookie</button>
        <button onClick={RemoveCookie}>Remove Cookie</button>
      </div>

      <div className="text-center mt-5">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Products</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ml-16">
        {data.map((dataObj, index) => (
          <div key={index}>
            <div className="max-w-sm mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="./src/assets/images/kaoskaki.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dataObj.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dataObj.email}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Details
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
