"use client";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import React from "react";

function Portfolio () {
    return(
       <DefaultLayout>
       <Breadcrumb pageName="Portfolio" />
       <div className="gap-6">
          <div className="font-sans p-6">
            <div className="mb-8 flex items-center gap-6 rounded-xl border-2 border-gray-600 bg-[#D2D8E1] dark:bg-[#24303F] p-4">
              <div className="h-24 w-24">
                <img
                  src="/user-02.png"
                  alt="Profile Avatar"
                  className="h-full w-full rounded-full object-cover shadow-9"
                />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-lg font-semibold dark:text-gray-400">Name:</span> Alice
                </p>
                <p className="font-bold text-black dark:text-white">
                  <span className="text-lg font-semibold dark:text-gray-400">Wallet Address:</span>{" "}
                  0x1234...abcd
                </p>
              </div>
            </div>
          </div>
        </div>
       </DefaultLayout>
    )
}

export default Portfolio;