import React from "react";

function Grid() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen relative">
        <img
          src="/images/img4.jpg"
          alt="Main Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white space-y-4">
          <h2 className="text-3xl font-bold">New And Bountiful Blues</h2>
          <p className="text-xl">
            Cool Shades to Put some Spring in your Step
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-white-500 px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white">
              Shop for Men
            </button>
            <button className="bg-white-500 px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white">
              Shop for Women
            </button>
          </div>
        </div>
      </div>


      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <div className="group relative overflow-hidden">
          <img
            src="/images/img10.png"
            alt="Image 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
            <span className="text-2xl">shop for men</span>
            <div className="absolute bottom-10 left-10 text-white space-y-4">
                <p className="text-3xl font-bold">Tree runner Go</p>
                <p className="text-xl">Hanami night</p>
          </div>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src="/images/img10.png"
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
            <span className="text-2xl">shop for men</span>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src="/images/img10.png"
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
            <span className="text-2xl">shop for men</span>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src="/images/img10.png"
            alt="Image 4"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
            <span className="text-2xl">shop for men</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
