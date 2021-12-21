import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMoviesInCarousel,
  getTvShowsInCarousel,
  clearCarouselsWithItems,
} from "../actions/discover.action";
import ContentCarousel from "../components/ContentCarousel";

const NewContentPage = () => {
  const dispatch = useDispatch();

  const pageCarousels = useSelector(
    (state) => state.discover.carouselsWithItems
  );

  const carousels = {
    newReleasedMovies: {
      name: "New Released Movies",
      itemType: "movie",
      key: "newReleasedMovies",
    },
    newReleasedTVShows: {
      name: "New Released TV Shows",
      itemType: "tv",
      key: "newReleasedTVShows",
    },
  };

  console.log(new Date());

  const requestOtions = {
    newReleasedMovies: {
      "primary_release_date.gte": "2021-09-01",
    },
    newReleasedTVShows: {
      "primary_release_date.gte": "2021-09-01",
    },
  };

  useEffect(() => {
    dispatch(
      getMoviesInCarousel(
        carousels.newReleasedMovies,
        requestOtions.newReleasedMovies
      )
    );
    dispatch(getTvShowsInCarousel(carousels.newReleasedTVShows, requestOtions.newReleasedTVShows));
    return () => dispatch(clearCarouselsWithItems());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <main className="page-content">
      {Object.keys(pageCarousels).map((carouselKey, i) => {
        return (
          <Fragment key={i}>
            <ContentCarousel carouselWithItems={pageCarousels[carouselKey]} />
          </Fragment>
        );
      })}
    </main>
  );
};

export default NewContentPage;
