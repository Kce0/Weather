import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// weathers props는 검색결과를 가져옴
function weatherCard({ weathers, locationName }) {
  return (
    <Grid container spacing={2.5}>
      {weathers.map((weather) => (
        // size = 12/5 하나의 행에 5개의 grid를 보여줌
        <Grid size={2.4} key={weather.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={
                weather.poster_path
                  ? `https://openweathermap.org/img/wn/${weather.icon}.png`
                  : "/images/poster.png"
              }
              title={locationName}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "200px",
                }}
              >
                {locationName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {weather.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default weatherCard;
