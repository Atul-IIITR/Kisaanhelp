const Crop = require('../modals/Crop'); // Adjust the path as needed
// Update crop information
exports.updateCrop = async (req, res) => {
    try {
      const crop = await Crop.findOneAndUpdate(
        { name: req.params.name },
        req.body,
        { new: true, runValidators: true }
      );
  
      if (crop) {
        res.json({ message: 'Crop updated', crop });
      } else {
        res.status(404).json({ message: 'Crop not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };