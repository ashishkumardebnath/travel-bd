import { useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  fetch("category.json")
    .then((res) => res.json())
    .then((data) => setCategories(data));
  return (
    <div className="mt-20">
      <p className="font-semibold text-center">CATEGORY</p>
      <h3 className="text-3xl font-bold text-center">We Offer Best Services</h3>
      <div className="grid lg:grid-cols-4 gap-5 mt-10">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="card lg:w-72 lg:h-80  shadow-xl ">
              <figure className="px-10 pt-10">
                <img src={category.image} alt="" className="rounded-xl h-28" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{category.name}</h2>
                <p>{category.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
