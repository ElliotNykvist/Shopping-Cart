/* eslint-env node */
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Define the path to the images folder
const imagesPath = join(__dirname, 'images');

// Serve images from the "images" folder
app.use('/images', express.static(imagesPath));

// Function to convert an image file to base64 encoding
const imageToBase64 = (imageName) => {
  const imagePath = join(imagesPath, imageName);
  const imageBuffer = fs.readFileSync(imagePath);
  return `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
};

// Dummy data for Volvo cars
const volvoCars = [
  { id: 1, model: 'XC90 Recharge', type: 'SUV', image: imageToBase64('XC90.jpg'), price: 62939},
  { id: 2, model: 'XC60', type: 'SUV', image: imageToBase64('XC60.jpg'), price: 49409},
  { id: 3, model: 'S90 Recharge', type: 'Saloon', image: imageToBase64('S90.jpg'), price: 40000},
  { id: 4, model: 'S60 Recharge', type: 'Saloon', image: imageToBase64('S60.jpg'), price: 50000},
  { id: 5, model: 'V90 Recharge', type: 'Estate', image: imageToBase64('V90.jpg'), price: 40000},
  { id: 6, model: 'V60 Recharge', type: 'Estate', image: imageToBase64('V60.jpg'), price: 50000},
  { id: 7, model: 'C40 Recharge', type: 'Crossover', image: imageToBase64('C40.jpg'), price: 52314},
  { id: 8, model: 'XC90', type: 'SUV', image: imageToBase64('XC90.jpg'), price: 57362},
  { id: 9, model: 'S90', type: 'Saloon', image: imageToBase64('S90.jpg'), price: 40000},
  { id: 10, model: 'S60', type: 'Saloon', image: imageToBase64('S60.jpg'), price: 44820},
  { id: 11, model: 'V90', type: 'Estate', image: imageToBase64('V90.jpg'), price: 40000},
  { id: 12, model: 'V60', type: 'Estate', image: imageToBase64('V60.jpg'), price: 50000},
  { id: 13, model: 'C40', type: 'Crossover', image: imageToBase64('C40.jpg'), price: 52314},
  { id: 14, model: 'XC40', type: 'SUV', image: imageToBase64('XC40.jpg'), price: 32627},
  { id: 15, model: 'EX90', type: 'SUV', image: imageToBase64('EX90.jpg'), price: 96255},
  { id: 16, model: 'XC40 Recharge', type: 'SUV', image: imageToBase64('XC40.jpg'), price: 45592},
  { id: 17, model: 'EX30', type: 'SUV', image: imageToBase64('EX30.jpg'), price: 50000},
  // Add more Volvo cars as needed
];

// Create a route to fetch Volvo car data
app.get('/api/volvo-cars', (req, res) => {
  res.json(volvoCars);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});