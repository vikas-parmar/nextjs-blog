import React from "react";

interface Category {
  name: string;
  path: string;
  bgcolor: string;
}

const CategoryCard = ({ name, bgcolor, path }: Category) => {
  return (
    <div
      style={{ background: bgcolor }}
      className="w-auto h-72 m-4 flex-center"
    >
      <p className="font-bold uppercase text-white">{name}</p>
    </div>
  );
};

export default CategoryCard;
