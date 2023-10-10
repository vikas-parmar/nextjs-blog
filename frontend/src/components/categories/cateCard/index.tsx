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
      className={`w-[300px] h-[200px] flex justify-center items-center`}
    >
      <p className="font-bold text-white">{name}</p>
    </div>
  );
};

export default CategoryCard;
