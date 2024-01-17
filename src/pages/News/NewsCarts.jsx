/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCarts = ({ newsCarts }) => {
  console.log(newsCarts);
  // eslint-disable-next-line react/prop-types
  const { _id, image_url, title, details, thumbnail_url } = newsCarts;
  return (
    <div className=" mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-left">{title}</h2>
          <p className=" text-left">{details.length < 250 ?
          <>{details}</>:
          <>
          {details.slice(0,250)}....
          <Link className=" text-red-600" to={`/news/${_id}`}>read more</Link>
          </>}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCarts;
