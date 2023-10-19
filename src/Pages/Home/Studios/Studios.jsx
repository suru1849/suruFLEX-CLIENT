import { useEffect, useState } from "react";
import BrandCard from "../../../Components/BrandCard/BrandCard";

const Studios = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-Bebas-neue font-bold text-center text-red-700 my-2">
        Studio
      </h1>
      {/* brand container */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
        {brands?.map((brand) => (
          <BrandCard key={brand.category} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Studios;
