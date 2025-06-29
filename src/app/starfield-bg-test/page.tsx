import Starfield from "@/components/starfield";
import React from "react";

const Page = () => {
  return (
    <div className="relative">
      <div className="h-[100vh] w-[100vw] overflow-hidden relative">
        <Starfield
          style={{
            background: "#002",
          }}
        />
      </div>
      <div className="z-10 absolute top-0 left-0">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-white">Angel Lakra</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
