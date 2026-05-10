import React from "react";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";
import { useDispatch } from "react-redux";

const Collectioncard = ({ item }) => {
  const dispatch = useDispatch();

  const removecollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };
  // console.log(props);

  return (
    <div className="w-[20vw] relative h-60 bg-white rounded-xl overflow-hidden">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover"
            loop
            muted
            autoPlay
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center  px-4 py-5 w-full p-4  absolute bottom-0 text-white"
      >
        <p className="font-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </p>
        <button
          onClick={() => {
            removecollection(item);
            // console.log("remove");
          }}
          className="bg-indigo-600 text-white rounded cursor-pointer px-3 py-1 font-medium"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default Collectioncard;
