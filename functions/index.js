const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJUMASBfnhwSKRizSsuHHBOkPfbFlYDqSUFYaGfFaUp2OkFm8tX8TpxFa0MEqb5vzfdRi4pRlCvSOzA0SviE5nn007prgtPhx"
);

//Api

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("hello wolrd"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved BOOM !! for this amount>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  resposne.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen Commant
exports.api = functions.https.onRequest(app);

//example endpoint

//http://localhost:5001/clone-80cea/us-central1/api
