
const Crop = require('../modals/Crop'); // Adjust the path as needed
// Delete a crop
exports.deleteCrop = async (req, res) => {
    try {
      const crop = await Crop.findOneAndDelete({ name: req.params.name });
  
      if (crop) {
        res.json({ message: 'Crop deleted', crop });
      } else {
        res.status(404).json({ message: 'Crop not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  