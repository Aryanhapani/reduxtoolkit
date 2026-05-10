import React, { useEffect } from "react";
import { fecthgif } from "../api/Mediaapi";
import { fetchphoto } from "../api/Mediaapi";
import { fetchvideo } from "../api/Mediaapi";
import {
  setError,
  setResults,
  setloading,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        try {
          dispatch(setloading(true));
          let data = [];

          if (activeTab == "photos") {
            let response = await fetchphoto(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
            // console.log(data);
          }

          if (activeTab == "video") {
            let response = await fetchvideo(query);

            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
            // console.log(data);
          }

          if (activeTab === "gif") {
            let response = await fecthgif(query);

            data = response.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title,
              thumbnail: item.images.fixed_height.url,
              src: item.images.original.url,
              url: item.url,
            }));

            // console.log(data);
          }
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };

      getData();
    },
    [query, activeTab],
  );

  if (loading) return <h1>Loading....</h1>;
  return (
    <div className=" flex justify-center flex-wrap gap-5 overflow-auto px-15 py-5">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
