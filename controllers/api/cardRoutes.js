const router = require("express").Router();
const { Card } = require("../../models");

router.post("/", async (req, res) => {
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
module.exports = router;
