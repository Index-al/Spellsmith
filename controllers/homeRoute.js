const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");
const withAuth = require("../utils/auth");
const { QueryTypes } = require("sequelize");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data

    // Pass serialized data and session flag into template
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/account");
    return;
  }

  res.render("login");
});

router.get("/account", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    res.render("account", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/collection", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    res.render("collection", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/deck-builder", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    res.render("deck-builder", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search-result/:searchText", async (req, res) => {
  const cardSearch = req.params.searchText;
  try {
    const apiUrl = `https://api.scryfall.com/cards/search?q=${cardSearch}`;
    const response = await axios.get(apiUrl);
    const cardData = response.data.data;
    console.log(cardData[0].image_uris.normal);
    res.render("search-result", { cardData });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
