import "../Quorus/QuorusStyle.css";

import Playcard from "../../SubComponents/Playcard/Playcard";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

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
            return (
              <SwiperSlide className="swiper">
                <Playcard key={index} item={item}></Playcard>
              </SwiperSlide>
            );
        })
      ) : (
        <p className="noSearchResult"> No Result Found</p>
      )}
    </Swiper>
  );
}
