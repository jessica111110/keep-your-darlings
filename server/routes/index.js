const express = require("express")
const { isLoggedIn } = require("../middlewares")
const router = express.Router()

router.get("/"), (req, res, next) => {
  
}

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.json(req.user)
})

router.get("/closet", isLoggedIn, (req, res, next) => {
  res.json(req.users)
})



module.exports = router