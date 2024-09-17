const express = require("express");

const router = express.Router();
const cropController = require("../controllers/creat"); // Adjust the path as needed
const getcontroller = require("../controllers/getCrope"); 
const getAcontroller = require("../controllers/getAnimal.js"); 
const getHcontroller = require("../controllers/gethuman.js"); 
const putcontroller = require("../controllers/putCrop.js"); 
const deletecontroller = require("../controllers/deletCrop.js"); 

// Get animal-related info by crop name
router.get('/crop/:name/animal', getAcontroller.getCropAnimalInfo);
// Get human-related info by crop name
router.get('/crop/:name/human', getHcontroller.getCropHumanInfo);

// Add a new crop
router.post('/crop', cropController.addCrop);

// Get general crop data
router.get('/crop/:name', getcontroller.getCrop);

router.put('/crop/:name', putcontroller.updateCrop);

// Delete a crop
router.delete('/crop/:name', deletecontroller.deleteCrop);

module.exports=router;
// Add a new crop