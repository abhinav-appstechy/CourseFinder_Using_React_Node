import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../api";

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isSearchingActive, setIsSearchingActive] = useState(false);

  const handleSearchCourse = () => {
    setResult([]);
    

    if(query.trim() == ""){
      alert("Please enter your query!");
      return
    }
    setIsSearchingActive(true);

    fetch(`${BASE_URL}/search-course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data.status == "success"){
          console.log(data);
        setResult([data.data]);
        setIsSearchingActive(false);
        } else{
          setIsSearchingActive(false);
        }
        
      })
      .catch((error) => {
        console.log(error);
        setIsSearchingActive(false);
      });
  };

  const headline = (str) => {
    return <div dangerouslySetInnerHTML={{ __html: str }} />;
  };

  function roundUpToDecimalPlaces(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
  }

  return (
    <>
    <h3 className="md:text-3xl text-2xl md:leading-10 font-semibold text-center mt-20">Find Courses here</h3>
      <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] mt-10 mb-20">
        <input
          type="email"
          placeholder="Search for anything..."
          className="w-full outline-none bg-white pl-4 text-sm"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
          onClick={handleSearchCourse}
          disabled={isSearchingActive ? true : false}
        >
          {isSearchingActive ? "Searching..." : "Search"}
        </button>
      </div>

      {isSearchingActive ? (
        <>
          <div role="status" className="flex justify-center mx-auto mb-10">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>
          {result.length ? (
            <>
              {result[0].courses.map((course, idx) => (
                <div
                  key={idx}
                  className="popper-module--popper--mM5Ie ud-popper-open flex justify-center mx-auto container mb-20"
                >
                  <div className="prefetching-wrapper-module--prefetching-wrapper--h55SO">
                    <link
                      data-testid="view-prefetch"
                      rel="prefetch"
                      href={`https://www.udemy.com${course.url}`}
                      as="document"
                    />
                    <div
                      id="u25-popper-trigger--545"
                      aria-expanded="true"
                      tabIndex="0"
                      className="course-card-module--container--3oS-F course-card-module--large--AL3kI"
                      data-purpose="container"
                    >
                      <div className="course-card-module--image-container--o-meJ">
                        <a
                          href={`https://www.udemy.com${course.url}`}
                          target="_blank"
                        >
                          <img
                            src={course.image_240x135}
                            alt=""
                            className="course-card-image-module--image--dfkFe course-card-module--course-image--Bwpco browse-course-card-module--image--TAyXN"
                            width="260"
                            height="145"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div className="course-card-module--main-content--pEiUr course-card-module--has-price-text--g6p85">
                        <div>
                          <div className="course-card-title-module--title--W49Ap">
                            <h3
                              data-purpose="course-title-url"
                              className="ud-heading-md course-card-title-module--course-title--wmFXN text-2xl"
                            >
                              <a
                                href={`https://www.udemy.com${course.url}`}
                                target="_blank"
                              >
                                {course.title}
                                <div className="ud-sr-only" aria-hidden="true">
                                  <span data-testid="seo-headline">
                                    {course.headline}
                                  </span>
                                  <span data-testid="seo-rating">
                                    Rating: 4.7 out of 5
                                  </span>
                                  <span data-testid="seo-num-reviews">
                                    300179 reviews
                                  </span>
                                  <span data-testid="seo-content-info">
                                    {course.content_info}
                                  </span>
                                  <span data-testid="seo-num-lectures">
                                    {course.num_published_lectures +
                                      " lectures"}
                                  </span>
                                  <span data-testid="seo-instructional-level">
                                    {course.instructional_level_simple}
                                  </span>
                                  <span data-testid="seo-current-price">
                                    Current price:{" "}
                                    {course.price.price.price_string}
                                  </span>
                                </div>
                              </a>
                            </h3>
                          </div>
                        </div>
                        <p
                          className="ud-text-sm course-card-module--course-headline--v-7gj text-base"
                          data-purpose="safely-set-inner-html:course-card:course-headline"
                          data-testid="safely-set-inner-html:course-card:course-headline"
                        >
                          {headline(course.headline)}
                        </p>
                        <div className="ud-text-xs">
                          <span className="ud-sr-only">Instructors:</span>
                          <div
                            className="course-card-instructors-module--instructor-list--cJTfw text-base"
                            data-purpose="safely-set-inner-html:course-card:visible-instructors"
                            data-testid="safely-set-inner-html:course-card:visible-instructors"
                          >
                            {course.visible_instructors.map((instructor) => (
                              <>{" " + instructor.display_name},</>
                            ))}
                          </div>
                        </div>
                        <div className="course-card-ratings-module--row--Lnvpa">
                          <span className="star-rating-module--star-wrapper--i1cJH star-rating-module--medium--Lpe62">
                            <span className="ud-sr-only">
                              Rating: {Math.ceil(course.rating)} out of 5
                            </span>
                            <span
                              className="ud-heading-sm star-rating-module--rating-number--2-qA2 text-base"
                              aria-hidden="true"
                              data-purpose="rating-number"
                            >
                              {roundUpToDecimalPlaces(course.rating, 1)}
                            </span>
                            <svg
                              aria-hidden="true"
                              width="100%"
                              height="100%"
                              viewBox="0 0 70 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="u25-star-rating-mask--547"
                                data-purpose="star-rating-mask"
                              >
                                <rect
                                  x="0"
                                  y="0"
                                  width="90%"
                                  height="100%"
                                  fill="white"
                                ></rect>
                              </mask>
                              <g
                                className="star-rating-module--star-filled--FgjdR"
                                mask="url(#u25-star-rating-mask--547)"
                                data-purpose="star-filled"
                              >
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="14"
                                  height="14"
                                  x="0"
                                >
                                  <svg
                                    id="icon-rating-star"
                                    viewBox="0 0 24 24"
                                    width="14"
                                    height="14"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                                  </svg>
                                </use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="14"
                                  height="14"
                                  x="14"
                                >
                                  <svg
                                    id="icon-rating-star"
                                    viewBox="0 0 24 24"
                                    width="14"
                                    height="14"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                                  </svg>
                                </use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="14"
                                  height="14"
                                  x="28"
                                >
                                  <svg
                                    id="icon-rating-star"
                                    viewBox="0 0 24 24"
                                    width="14"
                                    height="14"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                                  </svg>
                                </use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="14"
                                  height="14"
                                  x="42"
                                >
                                  <svg
                                    id="icon-rating-star"
                                    viewBox="0 0 24 24"
                                    width="14"
                                    height="14"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                                  </svg>
                                </use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="14"
                                  height="14"
                                  x="56"
                                >
                                  <svg
                                    id="icon-rating-star"
                                    viewBox="0 0 24 24"
                                    width="14"
                                    height="14"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                                  </svg>
                                </use>
                              </g>
                              <g
                                fill="transparent"
                                className="star-rating-module--star-bordered--A4SZK"
                                strokeWidth="2"
                                data-purpose="star-bordered"
                              >
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="12"
                                  height="12"
                                  x="1"
                                  y="1"
                                ></use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="12"
                                  height="12"
                                  x="15"
                                  y="1"
                                ></use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="12"
                                  height="12"
                                  x="29"
                                  y="1"
                                ></use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="12"
                                  height="12"
                                  x="43"
                                  y="1"
                                ></use>
                                <use
                                  xlinkHref="#icon-rating-star"
                                  width="12"
                                  height="12"
                                  x="57"
                                  y="1"
                                ></use>
                              </g>
                            </svg>
                          </span>
                          <span
                            aria-label="300179 reviews"
                            className="ud-text-xs course-card-ratings-module--reviews-text--1z0l4 text-base"
                          >
                            {"(" + course.num_reviews + ")"}
                          </span>
                        </div>
                        <div className="course-card-details-module--row--jw-lD">
                          <div
                            data-purpose="course-meta-info"
                            className="course-card-details-module--row--jw-lD course-card-details-module--course-meta-info--2bDQt ud-text-xs"
                          >
                            <span className="course-card-details-module--row--jw-lD text-base">
                              {course.content_info}
                            </span>
                            <span className="course-card-details-module--row--jw-lD text-base">
                              {course.num_published_lectures + " lectures"}
                            </span>
                            <span className="course-card-details-module--row--jw-lD text-base">
                              {course.instructional_level_simple}
                            </span>
                          </div>
                        </div>
                        <div className="course-card-module--price-text-container--2TRvR">
                          <div
                            className="base-price-text-module--container--Sfv-5 course-card-module--price-text-base-price-text-component--Q-Ucg"
                            data-purpose="price-text-container"
                          >
                            <div
                              className="base-price-text-module--price-part---xQlz course-card-module--price-text-base-price-text-component-discount-price--Xztnd ud-heading-md"
                              data-purpose="course-price-text"
                            >
                              <span className="ud-sr-only">Current price</span>
                              <span>
                                <span className="text-xl">
                                  {course.price.price.price_string}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {course.badges.length > 0 ? (
                          <div className="course-card-module--badges-container--YDhzE">
                            <div className="browse-course-card-module--wrapped-course-badges--1Yyi1">
                              <div className="course-card-badges-module--course-badges--NtSTO">
                                <div className="ud-badge ud-heading-xs course-badges-module--bestseller--JKaT4 text-base">
                                  {course.badges[0].badge_text}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default SearchSection;
