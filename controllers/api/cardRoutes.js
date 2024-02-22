const router = require("express").Router();
const { Card } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newCard = await Card.create({
      ...req.body,
      collection_id: req.session.user_id,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update", withAuth, async (req, res) => {
  try {
    console.log(req.body.key_id);
    const removedCard = await Card.update(
      {
        collection_id: NULL,
      },
      {
        where: {
          key_id: req.body.key_id,
        },
      }
    );

    res.status(200).json(removedCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
