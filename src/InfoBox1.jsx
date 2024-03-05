import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./InfoBox1.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; //rain
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// let info ={
//   city : "delhi",
//   feelsLike : 24.84,
//   temp : 25.05,
//   tempMin : 25.05,
//   tempMax : 25.05,
//   humidity : 47,
//   weather :"haze",

// }

function InfoBox1({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1623741519006-a9b6f27ae909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1628963033537-0ef3cc7a6e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFJBSU4lMjBzdW1tZXJ8ZW58MHx8MHx8fDA%3D";

  const INIT_URL =
    "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox1">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <div className="card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }



            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Tempreture : {info.temp}&deg;c</div>
              <div>Humidity : {info.humidity}&deg;c</div>
              <div>Min Temp : {info.tempMin}&deg;c</div>
              <div>
                The Weather can be describe as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like{" "}
                <b>
                  <i>{info.feelsLike}</i>
                </b>
                &deg;c
              </div>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default InfoBox1;
