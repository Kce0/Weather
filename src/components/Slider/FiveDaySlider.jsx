import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchFiveDaySearchResults } from "../../features/weather/weatherSlice";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/FiveDaySlider.css";

import { Wrap, Main } from "../../styles/StyledComponent";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

function FiveDaySlider({ days, locationName }) {
  const { fivedaysearchResults, loading, error } = useSelector(
    (state) => state.weathers
  );

  if (loading) {
    return (
      <Wrap>
        <Menu />
        <Main>Loading...</Main>
        <Footer />
      </Wrap>
    );
  }

  if (error) {
    return (
      <Wrap>
        <Menu />
        <Main>Error:{error}</Main>
        <Footer />
      </Wrap>
    );
  }

  return (
    <>
      <h2>5일간 날씨</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {days.map((day, index) => (
          <SwiperSlide key={index} className="Search-FiveSlider">
            <div>
              <p className="lastText">{day.dt_txt.split(" ")[0]}</p>

              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                alt={day.weather[0].locationName}
              />
              <p>{day.weather[0].description}</p>
              <p>
                <span>최저 {day.main.temp_min}°</span> |
                <span> 최고 {day.main.temp_max}°</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default FiveDaySlider;
