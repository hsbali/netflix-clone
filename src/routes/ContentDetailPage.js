import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import NotFound from "./../components/NotFound";

import { getContentDetails } from "../actions/contentDetails.action";

const ContentDetailPage = () => {
  const params = useParams();
  const { contentType, id } = params;

  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.contentDetails.item);
  const itemDetailsError = useSelector((state) => state.contentDetails.error);

  useEffect(() => {
    dispatch(getContentDetails(contentType, id));
  }, []);
  if ((contentType !== "movie" && "tv") || itemDetailsError)
    return <NotFound />;

  return (
    <>
      {itemDetails !== null ? (
        <main className="page-content">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-4">
                <div className="rounded overflow-hidden">
                  <img
                    className="w-100"
                    src={`${process.env.REACT_APP_IMG_BASE_URL}/t/p/w600_and_h900_bestv2${itemDetails.poster_path}`}
                    alt={itemDetails.title}
                  />
                </div>
              </div>
              <div className="col-md-8 py-5">
                <h1>
                  {itemDetails.title} (
                  {itemDetails.release_date.substring(0, 4)})
                </h1>
                <h6>Averate Rating: {itemDetails.vote_average} | Total Votes: {itemDetails.vote_count}</h6>

                <p className="text-muted">
                  <>
                    {itemDetails.genres.map((genre, i) => {
                      return <Fragment key={i}>{i !== itemDetails.genres.length - 1 ? `${genre.name}, ` : `${genre.name}`}</Fragment>;
                    })}
                  </> | {Math.floor(itemDetails.runtime/60)}h {itemDetails.runtime%60}m
                </p>

                <h4 className="mt-5">Overview</h4>
                <p>{itemDetails.overview}</p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        ""
      )}
    </>
  );
};

export default ContentDetailPage;
