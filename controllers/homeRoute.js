const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Card, CardCollection, Collection } = require("../models");
const withAuth = require("../utils/auth");
const { QueryTypes } = require("sequelize");
const axios = require("axios");
const express = require('express');

// Helper function to get a random card from Scryfall API
const getRandomCard = async () => {
  try {
    const response = await axios.get('https://api.scryfall.com/cards/random');
    const card = response.data;
    return {
      name: card.name,
      set: card.set_name,
      imageUrl: card.image_uris ? card.image_uris.normal : '' // Fallback in case there's no image
    };
  } catch (error) {
    console.error('Error fetching random card:', error);
    return null;
  }
};


router.get("/", async (req, res) => {
  try {
    // Fetch 3 random cards
    const randomCardPromises = [getRandomCard(), getRandomCard(), getRandomCard()];
    
    // Wait for all promises to resolve
    const featuredCards = await Promise.all(randomCardPromises);

    // Filter out any null results in case of API fetching errors
    const validFeaturedCards = featuredCards.filter(card => card != null);

    // Pass the data to the template
    res.render("homepage", {
      logged_in: req.session.logged_in,
      featuredCards: validFeaturedCards,
    });
  } catch (err) {
    console.error('Error while fetching featured cards:', err);
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

router.get("/collection", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const collectionData = await Card.findAll({
      include: [
        {
          model: Collection,
        },
      ],
    });

    const dataFiltered = collectionData.filter(
      (card) => card.dataValues.collection_id === req.session.user_id
    );

    scryfallObjData = [];
    for (let i = 0; i < dataFiltered.length; i++) {
      const apiUrl = `https://api.scryfall.com/cards/search?q=${dataFiltered[i].dataValues.name}`;
      const response = await axios.get(apiUrl);
      const cardData = response.data.data;
      scryfallObjData.push(cardData[0]);
    }

    // console.log(scryfallObjData);
    res.render("collection", {
      scryfallObjData,
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
