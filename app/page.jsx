import {
  GLOBAL_PAGE_ID,
  HOME_PAGE_ID,
  haGiangLat,
  haGiangLon,
} from '@/lib/constants'
import getData from '@/lib/getData'
import Homepage from '@/sections/homepage'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

const getHomepageData = async () => {
  return getData(`wp-json/acf/v3/pages/${HOME_PAGE_ID}`)
}

const getCommonData = async () => {
  return getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
}

const getWeatherHaGiang = async () => {
  return getData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${haGiangLat}6&lon=${haGiangLon}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    'custom',
  )
}

const getTypeofTour = async () => {
  return getData(`wp-json/okhub/v1/get-list-tax-by-slug?slug=type-of-tour`)
}
const getListTime = async () => {
  return getData(`wp-json/okhub/v1/get-list-tax-by-slug?slug=time`)
}
const getListTours = async () => {
  return getData(`wp-json/okhub/v1/tours`)
}
const getBestTrip = async () => {
  return getData(
    `wp-json/okhub/v1/get_field_best_trip_by_page?page_id=${HOME_PAGE_ID}`,
  )
}
export async function generateMetadata() {
  const result = await fetchMetaData('homepage/')
  return getMeta(result, '')
}

const page = async () => {
  const [
    dataAcf,
    dataWeather,
    listTypeofTour,
    listTime,
    listTours,
    listBestTrip,
    commonData,
  ] = await Promise.all([
    getHomepageData(),
    getWeatherHaGiang(),
    getTypeofTour(),
    getListTime(),
    getListTours(),
    getBestTrip(),
    getCommonData(),
  ])
  return (
    <Homepage
      dataAcf={dataAcf?.acf}
      dataWeather={dataWeather}
      listTypeofTour={listTypeofTour}
      listTime={listTime}
      listTours={listTours}
      listBestTrip={listBestTrip}
      commonData={commonData}
    />
  )
}

export default page
