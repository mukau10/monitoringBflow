import express from"express";
const app = express();
import cors from "cors";
import bodyParser from 'body-parser';
import fetch from"node-fetch";
const PORT= 8080;
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "GET, PUT",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  async function callApi() {
    await fetch(
      "https://c01-usa-east-et.integrate-test.boomi.com/ws/simple/getMonitoring",
      {
        mode: "cors",
        method: "GET",
        credentials: "include",
        headers: {
          Authorization:
            "Bearer aHJtYy0zSEFUSEQuRFhLWE42OjlmMjNjNjZkLWM2N2ItNDc5OS05NWQ1LTg0NzdjYzM0YWQxMg==",
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers":
            "cache-control,content-type,expires,last-modified,accept,content-language,authorization,pragma",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "GET, POST, DELETE",
          "Access-Control-Max-Age": 3600,
        },
      }
    )
      .then((response) => response.json())
      .then((items) => res.send(items))
      .catch((err) => console.error(err));
  }
  callApi()

});

app.listen(8080, () => {
  console.log(`listening on port ${PORT}`);
});
