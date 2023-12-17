// server.js
import express from 'express';
const app = express();
const PORT = 3001;

// Dummy data for Volvo cars
const volvoCars = [
  { id: 1, model: 'XC90 Recharge', type: 'SUV', image: './images/XC90.jpg', price: 62939 },
  { id: 2, model: 'XC60', type: 'SUV', image: './images/XC60.jpg', price: 49409 },
  { id: 3, model: 'S90 Recharge', type: 'Saloon', image: './images/S90.jpg', price: 40000 },
  { id: 4, model: 'S60 Recharge', type: 'Saloon', image: './images/S60.jpg', price: 50000 },
  { id: 5, model: 'V90 Recharge', type: 'Estate/Hatchback', image: './images/V90.jpg', price: 40000 },
  { id: 6, model: 'V60 Recharge', type: 'Estate/Hatchback', image: './images/V60.jpg', price: 50000 },
  { id: 7, model: 'C40 Recharge', type: 'Crossover', image: '/images/C40.jpg', price: 52314 },
  { id: 8, model: 'XC90', type: 'SUV', image: './images/XC90.jpg', price: 57362 },
  { id: 9, model: 'S90', type: 'Saloon', image: './images/S90.jpg', price: 40000 },
  { id: 10, model: 'S60', type: 'Saloon', image: './images/S60.jpg', price: 44820 },
  { id: 11, model: 'V90', type: 'Estate/Hatchback', image: './images/V90.jpg', price: 40000 },
  { id: 12, model: 'V60', type: 'Estate/Hatchback', image: './images/V60.jpg', price: 50000 },
  { id: 13, model: 'C40', type: 'Crossover', image: './images/C40.jpg', price: 52314 },
  { id: 14, model: 'XC40', type: 'SUV', image: './images/XC40.jpg', price: 32627 },
  { id: 15, model: 'EX90', type: 'SUV', image: './images/EX90.jpg', price: 96255 },
  { id: 16, model: 'XC40 Recharge', type: 'SUV', image: './images/XC40.jpg', price: 45592 },
  { id: 17, model: 'EX30', type: 'SUV', image: './images/EX30.jpg', price: 50000 },
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