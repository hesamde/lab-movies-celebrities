// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const express = require("express");
const Movie = require("../models/movie");
const Celebrity = require("../models/Celebrity");

// all your routes here

router.get("/create", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities });
    })
    .catch((error) => {
      console.error("Error fetching celebrities:", error);
      res.redirect("/movies");
    });
});

router.post("creat", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  const newMovie = new Movie({
    title,
    genre,
    plot,
    cast,
  });

  newMovie
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.error("Error crating movie:", error);
      res.redirect("/movies/create");
    });
});

router.get("/", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      res.redirect("/");
    });
});

router.get("/:id", (req, res) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .populate("cast")
    .then((movie) => {
      res.render("movies/movie-details", { movie });
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
      res.redirect("/movies");
    });
});
router.post("/:id/delete", (req, res) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId)
    .then(() => {
      console.log("Movie deleted successfully.");
      res.redirect("/movies");
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      res.redirect(`/movies/${movieId}`);
    });
});

router.get("/:id/edit", (req, res) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .populate("cast")
    .then((movie) => {
      Celebrity.find()
        .then((celebrities) => {
          res.render("movies/edit-movie", { movie, celebrities });
        })
        .catch((error) => {
          console.error("Error retrieving celebrities:", error);
          res.redirect(`/movies/${movieId}`);
        });
    })
    .catch((error) => {
      console.error("Error retrieving movie:", error);
      res.redirect("/movies");
    });
});
router.post("/:id", (req, res) => {
  const movieId = req.params.id;
  const { title, genre, plot, cast } = req.body;

  Movie.findByIdAndUpdate(movieId, { title, genre, plot, cast })
    .then(() => {
      console.log("Movie updated successfully.");
      res.redirect(`/movies/${movieId}`);
    })
    .catch((error) => {
      console.error("Error updating movie:", error);
      res.redirect(`/movies/${movieId}`);
    });
});

module.exports = router;
