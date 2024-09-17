  
  const Crop = require('../modals/Crop'); // Adjust the path as needed

  // Get human-related info by crop name
  exports.getCropHumanInfo = async (req, res) => {
    try {
      const crop = await Crop.findOne({ name: req.params.name });
  
      if (crop) {
        res.json({
          humanDiseases: crop.human.diseases,
          humanEffects: crop.human.effects,
          humanBenefits: crop.human.benefits
        });
      } else {
        res.status(404).json({ message: 'Crop not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };