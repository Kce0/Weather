import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../features/weather/weatherSlice' // `fetchSearchResults` import

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import WeatherCard from '../components/WeatherCard'

function SearchResults() {
   const [SearchParams] = useSearchParams()
   const query = SearchParams.get('query')

   const dispath = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispath(fetchSearchResults({ query: query }))
   }, [dispath, query])

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
         <Main $padding="30px 0">{searchResults.weather && searchResults.weather.length > 0 ? <WeatherCard weathers={searchResults.weather} locationName={searchResults.name} temp={searchResults.main} /> : <h2>검색 결과가 없습니다.</h2>}</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
