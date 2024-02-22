const router = require("express").Router();
const { Card } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const collection_id = req.session.user_id;
    const newCard = await Card.create({
      collection_id,
      ...req.body,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update", withAuth, async (req, res) => {
  try {
    const removedCard = await Card.destroy({
      where: {
        key_id: req.body.key_id,
      },
    });

    res.status(200).json(removedCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
