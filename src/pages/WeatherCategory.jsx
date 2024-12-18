import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchTodayWeathers,
  fetch5dayWeathers,
} from "../features/weather/weatherSlice";
import WeatherCard from "../components/WeatherCard";

function WeatherCategory({ category }) {
  const dispath = useDispatch();
  const { fivedayWeathers, todayWeathers, loading, error } = useSelector(
    (state) => state.weathers
  );

  useEffect(() => {
    if (category === "today") {
      dispath(fetchTodayWeathers({ category }));
    } else if (category === "fiveday") {
      dispath(fetch5dayWeathers({ category }));
    }
  }, [dispath, category]);

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

  // 렌더링을 다 한 후에 useEffect가 실행되기 때문에 아무것도 없는 상태에서 아래 코드를 실행하려고 하니 에러가 발생함.
  // 그래서 if문을 사용해 null값일 때는 실행되지 않도록 만들어줌.
  let days = [];

  // 날짜별로 데이터를 그룹화 **공부**
  if (fivedayWeathers) {
    const groupedByDate = fivedayWeathers.list.reduce((acc, day) => {
      const date = day.dt_txt.split(" ")[0]; // 날짜 부분만 추출 (YYYY-MM-DD 형식)
      if (!acc[date]) {
        acc[date] = day; // 첫 번째 시간대의 데이터를 저장
      }
      return acc;
    }, {});

    // 날짜별로 그룹화된 데이터의 값을 배열로 변환
    days = Object.values(groupedByDate);
  }

  return (
    <Wrap>
      <Menu />
      <Main>
        {category === "today" ? (
          <WeatherCard
            weathers={todayWeathers.weather}
            locationName={todayWeathers.name}
            temp={todayWeathers.main}
          />
        ) : (
          // ***공부***
          days.slice(0, 9).map((day, index) => (
            <WeatherCard
              key={index}
              index={index}
              weathers={day.weather}
              locationName={fivedayWeathers.city.name}
              temp={day.main}
              day={day.dt_txt.split(" ")[0]} // 날짜만 전달 (YYYY-MM-DD)
            />
          ))
        )}
      </Main>
      <Footer />
    </Wrap>
  );
}

export default WeatherCategory;
