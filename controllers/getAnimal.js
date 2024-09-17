const Crop = require('../modals/Crop'); // Adjust the path as needed

// Get animal-related info by crop name
exports.getCropAnimalInfo = async (req, res) => {
    try {
      const crop = await Crop.findOne({ name: req.params.name });
  
      if (crop) {
        res.json({
          animalDiseases: crop.animal.diseases,
          animalEffects: crop.animal.effects,
          animalBenefits: crop.animal.benefits
        });
      } else {
        res.status(404).json({ message: 'Crop not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  