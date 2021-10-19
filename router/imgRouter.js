const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
    const selectQuery = `
        SELECT  name,
	            size,
                createdAt
          FROM  img;
    `
    try {
        db.query(selectQuery, (err, imgs) => {
            res.render("screens/home", {imgs});
        });
    } catch (error) {
        console.error(error);
        return res.redirect("/");
    }
});

router.post("/create", (req, res) => {
    const insertQuery = `
        
    `;

    try {
        
    } catch (error) {
        
    }
});

module.exports = router;