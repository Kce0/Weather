import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodayWeathers } from '../features/weather/weatherSlice'
import WeatherCard from '../components/WeatherCard'

function WeatherCategory({ category }) {
   const dispath = useDispatch()
   const { todayWeathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispath(fetchTodayWeathers({ category }))
   }, [dispath])

   if (loading) {
      return (
         <Wrap>
            <Menu />
            <Main>Loading...</Main>
            <Footer />
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>Error:{error}</Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main>
            <WeatherCard weathers={todayWeathers.weather} locationName={todayWeathers.name} temp={todayWeathers.main} />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default WeatherCategory
