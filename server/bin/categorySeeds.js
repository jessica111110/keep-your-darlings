require('dotenv').config();
require('../configs/database');
const mongoose = require("mongoose");
const Category = require("../models/Category");

const bcryptSalt = 10;


let categories = [
  {
    name: "Clothing",
    subcategories: ["Pants", "Jeans", "Shorts", "Tops", "T-Shirts", "Blouses", "Pullovers", "Sweaters", "Hoodies", "Cardigans", "Blazers", "Vests", "Jackets", "Coats", "Dresses", "Skirts", "Overalls", "Body", "Pyjamas"]
  },
  {
    name: "Shoes",
    subcategories: ["Sneakers", "Boots", "Ankleboots", "Chelseaboots", "Overknees", "Loafers", "Brougues", "Flats", "Espadrilles", "Ballerinas", "Sandals", "Slippers", "Pumps", "Highheels", "Wedges",]
  },
  {
    name: "Special",
    subcategories: ["Swimwear", "Sportswear", "Lingerie", "Costumes", "Formalwear", "Other"]
  },
  {
    name: "Accessories",
    subcategories: ["Necklacees", "Rings", "Bracelets", "Earrings", "Watches", "Sunglasses", "Ties", "Scarves", "Hats", "Gloves", "Belts", "Other"]
  },
  {
    name: "Bags",
    subcategories: ["Backpacks", "Fannypacks", "Messengers", "Totes", "Satchels", "Bucketbags", "Clutches", "Duffelbags", "Handbags", "Shoulderbags", "Weekenders", "Laptopbags", "Beachbags"]
  }
]

Category.create(categories)
  .then(categoriesCreated => {
    console.log(`${categoriesCreated.length} categories created`);
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

