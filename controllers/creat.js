const Crop = require("../modals/Crop");

// Add a new crop
exports.addCrop = async (req, res) => {
    try {
      const newCrop = new Crop(req.body);
  
      // Check if crop already exists
      const existingCrop = await Crop.findOne({ name: newCrop.name });
      if (existingCrop) {
        return res.status(409).json({ message: 'Crop already exists' });
      }
  
      await newCrop.save();
      res.status(201).json({ message: 'Crop added', newCrop });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


 