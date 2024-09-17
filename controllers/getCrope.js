const Crop = require('../modals/Crop'); // Adjust the path as needed
// Get general crop data


exports.getCrop = async (req, res) => {
    try {
      const crop = await Crop.findOne({ name: req.params.name });
  
      if (crop) {
        res.json({
          benefits: crop.benefits,
          diseases: crop.diseases,
          source: crop.source,
          environments: crop.environments
        });
      } else {
        res.status(404).json({ message: 'Crop not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


