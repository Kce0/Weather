import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function WeatherCard({ weathers, locationName, temp }) {
   return (
      <>
         {weathers.map((weather) => (
            <Grid key={weather.id} sx={{ width: '1200px' }}>
               <Card
                  sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     marginTop: '180px',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     backgroundColor: 'rgba(84,103,119,0.8)',
                     borderRadius: '10px',
                     padding: '0 100px',
                  }}
               >
                  <CardContent>
                     <Typography
                        variant="h5"
                        component="div"
                        sx={{
                           fontSize: '25px',
                           color: 'white',
                           marginBottom: '20px',
                        }}
                     >
                        <p>{locationName}</p>
                     </Typography>
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                           fontSize: '40px',
                           fontWeight: 'bold',
                           color: 'white',
                        }}
                     >
                        <p>{weather.description}</p>
                     </Typography>
                     <p style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>
                        최고 {temp.temp_max}° 최저 {temp.temp_min}°
                     </p>
                  </CardContent>
                  <CardMedia component="img" sx={{ width: 250, height: 250 }} image={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} title={locationName} />
               </Card>
            </Grid>
         ))}
      </>
   )
}

export default WeatherCard
