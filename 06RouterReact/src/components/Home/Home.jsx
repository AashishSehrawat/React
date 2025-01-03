import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full mt-3 px-28 gap-20">
        <div className="flex gap-3">
          <div className="w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/048/185/644/non_2x/realistic-car-illustration-orange-car-side-view-isolated-on-white-vector.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              consequuntur eum aliquid molestiae magnam iure. Laborum ducimus
              sapiente commodi incidunt.
            </p>
            <button className="self-start bg-orange-500 px-3 py-1 text-2xl text-white rounded-md hover:bg-orange-600 transition-all">
              Download Now
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-5xl font-bold">Faster Than You Think</p>
          <img
            className="w-1/2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEL0FhB11ZUckMcJ0uAM6lifyQIKgLVlQs3fwzlUy5GLZzjO0Robi4V3-zOmybbkSn8aM&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
