const express = require("express");
const router = express.Router();
const Users = require("../models/user");

router.post("/verification", async (req, res) => {
    const user = await Users.findOne({ email: req.body.email }).lean()
    if (user.registerCode===req.body.registerCode) {
        try {
            const data= await Users.findByIdAndUpdate(user._id, req.body)
                res.json({
                    msg: "You have Verified your account successfully",
                    isVerified: true,
                })
        }
        catch (err) {
            console.log(err)
        }
    } else {
        res.json({
            msg: "Invalid Verification Code!"
        })
    }
});

module.exports = router;