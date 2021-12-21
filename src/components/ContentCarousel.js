import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

import styles from "./../styles/components/contentCarousel.module.scss";

const ContentCarousel = ({ carouselWithItems }) => {
  const [startOverflow, setStartOverflow] = useState(false);
  const [endOverflow, setEndOverflow] = useState(true);

  const scrollRef = useHorizontalScroll(setStartOverflow, setEndOverflow);

  return (
    <div className={`${styles["carousel-container"]}`}>
      <h3 className="mt-5 mb-4">{carouselWithItems.name}</h3>
      <div className={`${styles["carousel"]}`}>
        <div
          className={
            startOverflow
              ? `${styles["start-overflow"]} ${styles["visible"]}`
              : `${styles["start-overflow"]}`
          }
        ></div>
        {carouselWithItems && carouselWithItems.items ? (
          <>
            <ul
              ref={scrollRef}
              className={`d-flex gap-2 overflow-hidden`}
              //   onWheel={(e) => onScrollWheel(e)}
            >
              {carouselWithItems.items.map((item, i) => {
                return (
                  <Fragment key={i}>
                    <li className={`${styles["content-item"]}`}>
                      <Link
                        to={{
                          pathname: `/${carouselWithItems.itemType}/${item.id}`,
                          pageProps: {
                            type: carouselWithItems.itemType,
                          },
                        }}
                      >
                        <div className={`${styles["poster-container"]}`}>
                          <img
                            className="w-100"
                            src={`${process.env.REACT_APP_IMG_BASE_URL}/t/p/w220_and_h330_face${item.poster_path}`}
                            alt={item.title}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/no-poster.jpg";
                            }}
                          />
                        </div>
                        <div className="p-2">
                          {carouselWithItems.itemType === "movie" ? (
                            <h6 className="mb-2">{item.title}</h6>
                          ) : (
                            <h6 className="mb-2">{item.original_name}</h6>
                          )}
                          <p className="mb-1">Rating: {item.vote_average}</p>
                        </div>
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
        <div
          className={
            endOverflow
              ? `${styles["end-overflow"]} ${styles["visible"]}`
              : `${styles["end-overflow"]}`
          }
        ></div>
      </div>
    </div>
  );
};

export default ContentCarousel;
