/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCarts from "../News/NewsCarts";

const Categoris = () => {
  const categorisData = useLoaderData();
  console.log(categorisData);

  return (
    <div className="">
      <p>this is categoris : {categorisData.length}</p>
      {categorisData.map((newsCarts) => (
        <NewsCarts key={newsCarts._id} newsCarts={newsCarts}></NewsCarts>
      ))}
    </div>
  );
};

export default Categoris;
