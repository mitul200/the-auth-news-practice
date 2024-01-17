import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  console.log(newsDetails);

  const { _id, image_url, title, details, thumbnail_url,category_id } = newsDetails
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p className="text-left">{details}</p>
          <div className="card-actions justify-end">
          <Link to={`/category/${category_id}`}><button className="btn btn-primary">Listen</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
