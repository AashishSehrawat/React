import React from "react";

function Card({username = "ash", age=200}) {
  return (
    <>
      <div className="relative h-4/6 w-1/5 p-4 rounded-md bg-no-repeat bg-cover bg-custom-image filter brightness-5">
        <div className="relative z-10 text-white">
          <h2 className="text-xl font-bold">{username}</h2>
          <p>
            {age}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            minima, asperiores sit dolorum earum dicta quo totam iste quaerat
            tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            facere dicta. Neque expedita sapiente, illum error maxime ea omnis
            nam velit numquam minima quam atque nesciunt non molestias quod
            dolore.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
