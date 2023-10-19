import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
import Slider from "../../Components/Slider/Slider";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  const loadedData = useLoaderData();

  useEffect(() => {
    setCollections(loadedData);
  }, []);

  const collectionName = collections[0]?.brandName;

  return (
    <div className="bg-[url('https://i.ibb.co/0qKQDnj/Sprinkle.png')] ">
      {/* Slider */}
      <div className="mb-20">
        <Slider collections={collections}></Slider>
      </div>
      <h1 className="text-2xl font-bold md:text-3xl text-white text-center my-2">
        {collectionName} All Collections
      </h1>
      {/* products-collections */}
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 px-3 py-7">
        {collections?.map((product) => (
          <CollectionsCard
            key={product._id}
            product={product}
          ></CollectionsCard>
        ))}
      </div>
    </div>
  );
};

export default Collections;
