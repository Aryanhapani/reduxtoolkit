import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Collectioncard from "../components/collectioncard";
import { clearCollection } from "../redux/features/collectionSlice";

const Collectionpage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearall = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto px-10 py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-medium">
          {collection.length > 0 ? "your collection" : "Empty collection"}
        </h2>
        <button
          onClick={() => {
            clearall();
          }}
          className="active:scale-95 transtion cursor-pointer bg-red-500 px-3 py-3 text-base font-medium rounded"
        >
          clear collection
        </button>
      </div>
      <div className=" flex justify-start flex-wrap gap-5 overflow-auto px-15 py-5">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <Collectioncard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collectionpage;
