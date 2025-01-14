import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function WeatherCard({ weathers, locationName, temp, index: Index, day }) {
  return (
    <>
      {/* **공부** */}
      {Array.isArray(weathers) && weathers.length > 0 ? (
        weathers.map((weather) => (
          <Grid key={weather.id} sx={{ width: "1200px" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop:
                  Index === undefined || Index === 0 ? "180px" : "40px",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(84,103,119,0.8)",
                borderRadius: "10px",
                padding: "0 100px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "25px",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  {locationName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {weather.description}
                </Typography>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  최저 {temp.temp_min}° 최고 {temp.temp_max}°
                </p>
                {day ? <p style={{ color: "white" }}>{day}</p> : null}
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 250, height: 250 }}
                image={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                title={locationName}
              />
            </Card>
          </Grid>
        ))
      ) : (
        <div>Loading...</div> // 데이터가 없을 때 로딩 화면
      )}
    </>
  );
}

export default WeatherCard;
