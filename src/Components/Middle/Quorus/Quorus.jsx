import "../Quorus/QuorusStyle.css";

import Playcard from "../../SubComponents/Playcard/Playcard";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Scrollbar, Navigation, Pagination } from "swiper";

export default function Quorus({ quorusElement }) {

  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        769: {
          slidesPerView: 3,
        },
      }}
      //scrollbar={true}
      navigation={true}
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
      modules={[Scrollbar, Navigation, Pagination]}
      className="quorus-section"
    >
      {quorusElement.length ? (
        quorusElement.map((item, index) => {
          if (index < 8)
          {
           
            return (
              <SwiperSlide key={index} className="swiper">
                <Playcard ind={index} item={item}></Playcard>
              </SwiperSlide>
            );
          }
          else
            return <></>;
        })
      ) : (
        <p className="noSearchResult"> No Result Found</p>
      )}
    </Swiper>
  );
}
