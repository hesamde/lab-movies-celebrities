// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

//another routs comes here

// all your routes here

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });

  newCelebrity.save((err) => {
    if (err) {
      res.render("celebrities/new-celebrity");
    } else {
      res.redirect("/celebrities");
    }
  });
});

module.exports = Celebrity;
