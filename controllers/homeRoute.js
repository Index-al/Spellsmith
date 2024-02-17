const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Card, CardCollection, Collection } = require("../models");
const withAuth = require("../utils/auth");
const { QueryTypes } = require("sequelize");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Dummy data for featured cards
    const featuredCards = [
      {
        name: "Goblin Guide",
        set: "Zendikar",
        imageUrl:
          "https://cards.scryfall.io/large/front/a/f/afee5464-83b7-4d7a-b407-9ee7de21535b.jpg?1562791607",
      },
      {
        name: "Tarmogoyf",
        set: "Modern Masters",
        imageUrl:
          "https://cards.scryfall.io/large/front/1/f/1f3bb284-d10e-4265-92a4-8dcaf118f3c8.jpg?1561818871",
      },
      {
        name: "Force of Will",
        set: "Eternal Masters",
        imageUrl:
          "https://cards.scryfall.io/large/front/4/2/42f829be-d4f5-4231-a45d-1869222e5e24.jpg?1562908842",
      },
    ];

    // Pass serialized data and session flag into template
    res.render("homepage", {
      logged_in: req.session.logged_in,
      featuredCards: featuredCards,
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
    const collectionData = await Card.findAll({
      include: [
        {
          model: Collection,
          through: CardCollection,
          where: {
            user_id: req.session.user_id,
          },
        },
      ],
    });
    console.log(collectionData[1].dataValues.collections[0]);

    // const collectionData = await User.findByPk(req.session.user_id, {
    //   include: [{ model: Collection, include: [{ model: Card }] }],
    //   attributes: { exclude: ["password"] },
    // });

    // const data = collectionData.get({ plain: true });
    // console.log(data);
    // res.render("collection", {
    //   ...data,
    //   logged_in: true,
    // });
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
