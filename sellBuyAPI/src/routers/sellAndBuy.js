const express = require("express")
const SellBuy = require("../mongoose/models/sellBuy")

const router = express.Router()

router.get("/", async (req, res) => {
    try {
      if (req.query.product) {
        const data = await SellBuy.find({ productName: req.query.product });
        res.status(200).json(data);
      } else if (req.query.sortBy) {
        let list = req.query.sortBy;
        let ord = -1;
        if (list.charAt(0) === "l"){ 
            ord = 1;
        }
        if (list.includes("S")) {
          const data = await SellBuy.find().sort({ soldPrice: ord });
          res.status(200).json(data);
        } else {
          const data = await SellBuy.find().sort({ costPrice: ord });
          res.status(200).json(data);
        }
      } else {
        const data = await SellBuy.find();
        res.status(200).json(data);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.post("/", async (req, res, next) => {
    const data = new SellBuy(req.body);
    try {
      if (data.productName.length < 4) {
        const err = new Error("Product name should have a minimum of four characters");
        err.status = 400;
        next(err);
      } else if (req.body.costPrice <= 0) {
        const err = new Error("Cost price value cannot be zero or negative");
        err.status = 400;
        next(err);
      } else if (req.body.soldPrice <= 0) {
        const err = new Error("Sold price value cannot be zero or negative");
        err.status = 400;
        next(err);
      } else {
        await data.save();
        res.status(201).json({ message: "Product Added" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  /*
  router.patch("/:id", async (req, res, next) => {
    try {
      const data = req.body.soldPrice;
      if (data <= 0) {
        const err = new Error("Sold price value cannot be zero or negative");
        err.status = 400;
        next(err);
      }
      res.status(200).json({ message: "Updated Successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  */
  router.patch("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const soldPrice = req.body.soldPrice;

        if (soldPrice === undefined || isNaN(soldPrice) || soldPrice <= 0) {
            const err = new Error("Sold price value must be a positive number");
            err.status = 400;
            throw err;
        }

        const updatedProduct = await SellBuy.findByIdAndUpdate(id, { soldPrice }, { new: true });

        if (!updatedProduct) {
            const err = new Error("Product not found");
            err.status = 404;
            throw err;
        }

        res.status(200).json({ message: "Updated Successfully", updatedProduct });
    } catch (err) {
        next(err);
    }
});

  
  router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ error: "Invalid ID" });
        return;
      }
      await findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router