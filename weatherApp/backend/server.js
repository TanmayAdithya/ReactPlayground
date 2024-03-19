import express from 'express';
process.loadEnvFile();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

const app = express();

app.get('/weather', async (req, res) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=India&aqi=no`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
