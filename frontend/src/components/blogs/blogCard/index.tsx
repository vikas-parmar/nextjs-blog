import React, { useEffect, useState } from "react";

interface Blog {
  name: string;
  path: string;
  bgcolor: string;
}

const BlogCard = (data: Blog) => {
  const { name, bgcolor } = data;

  return (
    <div className="w-auto h-96 m-4 bg-bubble_gum flex-center">
      <p className="font-bold uppercase text-white">{name}</p>
    </div>
  );
};

export default BlogCard;
