"use client";
import React from "react";

const GridBackGRound = () => {

  return (
    <>
      <div
        className=" w-screen h-screen absolute -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 129, 170, 0.4) 0% , transparent)",
        //   backgroundSize: "20px 20px",
        }}
      >
        <h1 className=" flex items-center justify-center  ">
          {" "}
          Grid BACGROUND in css{" "}
        </h1>
      </div>
    </>
  );
};

export default GridBackGRound;
