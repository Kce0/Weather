import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchResults,
  fetchFiveDaySearchResults,
} from "../features/weather/weatherSlice";

import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import WeatherCard from "../components/WeatherCard";
import FiveDaySlider from "../components/Slider/FiveDaySlider";

function SearchResults() {
  const [SearchParams] = useSearchParams();
  const query = SearchParams.get("query");

  const dispatch = useDispatch();
  const { searchResults, fivedaysearchResults, loading, error } = useSelector(
    (state) => state.weathers
  );

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults({ query }));
      console.log("fetchSearchResults dispatched");
      dispatch(fetchFiveDaySearchResults({ query }));
      console.log("fetchFiveDaySearchResults dispatched");
    }
  }, [dispatch, query]);

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

  let fivedays = [];

  if (fivedaysearchResults && fivedaysearchResults.list) {
    const groupedByFiveDate = fivedaysearchResults.list.reduce((acc, day) => {
      const Fivedate = day.dt_txt.split(" ")[0];
      if (!acc[Fivedate]) {
        acc[Fivedate] = day;
      }
      return acc;
    }, {});
    fivedays = Object.values(groupedByFiveDate);
  }

  return (
    <Wrap>
      <Menu />
      <Main $padding="30px 0">
        {searchResults.weather && searchResults.weather.length > 0 ? (
          <WeatherCard
            weathers={searchResults.weather}
            locationName={searchResults.name}
            temp={searchResults.main}
          />
        ) : (
          <h2>검색 결과가 없습니다.</h2>
        )}
        {fivedays.slice(0, 9).length > 0 && (
          <FiveDaySlider
            days={fivedays.slice(0, 9)}
            locationName={fivedaysearchResults.city.name}
          />
        )}
      </Main>

      <Footer />
    </Wrap>
  );
}

export default SearchResults;
