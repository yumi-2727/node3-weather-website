// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=1df0dc564014634623e6018db1eb8b00&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to weather services!", undefined);
//     } else if (body.error) {
//       callback("Unable to find location.", undefined);
//     } else {
//       callback(
//         undefined,
//         body.current.weather_descriptions[0] +
//           ". It is currently " +
//           body.current.temperature +
//           " degress out. It feels like " +
//           body.current.feelslike +
//           " degress out."
//       );
//     }
//   });
// };

// module.exports = forecast;
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degress out. The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
