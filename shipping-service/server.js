// imports
const express = require("express");
const morgan = require("morgan");

const axios = require("axios");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Shipping");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
  
  console.log(req.body);

  // Make HTTP request to billing-service
  axios
    .post("http://billing-service:5005/billing", req.body)
    .then(response => {
      // console.log(response.data);
      res.send("POST SHIPPING and Billing processed successfully");
    })
    .catch(error => {
      console.error("Error making the billing request:", error);
      res.status(500).send("An error occurred while processing the billing");
    });
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

app.listen(5008);
