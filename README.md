KisaanHelp is an informative platform aimed at supporting farmers by providing detailed information about various crops. This includes benefits, diseases affecting crops, humans, and animals, and environmental requirements for optimal growth.

📌 Features
🔍 Search by crop name to get:

Benefits of the crop

Diseases affecting humans, animals, and the crop itself

Environmental requirements (temperature, soil type, etc.)

🌱 Data for top 30 major crops in India

📦 Built with Node.js, Express, and MongoDB

🛠️ Easy to update and expand crop database

🚀 How to Run the Project
Prerequisites
Make sure you have the following installed:

Node.js

MongoDB

Postman or any REST client (optional for testing)

Steps
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/kisaanhelp.git
cd kisaanhelp
Install dependencies

bash
Copy
Edit
npm install
Set up MongoDB

Make sure MongoDB is running locally or provide a MongoDB URI in a .env file:

MONGO_URI=mongodb://localhost:27017/kisaanhelp
Start the server


npm start
Access the API

Sample endpoint: GET /api/crops/chickpeas

📁 Project Structure

kisaanhelp/

├── models/            # Mongoose schemas

├── routes/            # API routes

├── controllers/       # Business logic

├── data/              # JSON crop data (optional)

├── .env               # Environment variables

├── app.js             # Main server file

├── README.md          # Project documentation



📚 Example Crop Data Output

json

{

  "name": "Chickpeas",
  
  "benefits": ["Rich in protein", "Improves soil fertility"],
  
  "diseases": {
  
    "humans": ["None"],
    
    "animals": ["None"],
    
    "crops": ["Ascochyta blight", "Fusarium wilt"]
    
  },
  
  "environment": {
  
    "temperature": "20-30°C",
    
    "soil": "Well-drained loamy soil"
    
  }
  
}

🤝 Contributing

Contributions are welcome! You can:

Add new crop data

Improve API performance or structure

Fix bugs or add new features



👨‍💻 Developed By

Atul, a Computer Science Engineer from IIIT Ranchi.

Connect with me on LinkedIn or check out more of my projects!

