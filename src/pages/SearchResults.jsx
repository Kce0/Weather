import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../features/weather/weatherSlice"; // `fetchSearchResults` import

import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function SearchResults() {
  const [SearchParams] = useSearchParams(); // query 파라미터 값 가져오기
  const query = SearchParams.get("query"); // 검색어

  const dispath = useDispatch();
  const { searchResults, loading, error } = useSelector(
    (state) => state.weathers
  );

  useEffect(() => {
    dispath(fetchSearchResults({ query: query }));
  }, [dispath, query]);

  return (
    <Wrap>
      <Menu />
      <Main $padding="30px 0">SearchResults 페이지</Main>
      <Footer />
    </Wrap>
  );
}

export default SearchResults;
