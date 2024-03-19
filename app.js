const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static("public"))

app.get('/countries/:name', async (req, res) => {
    try {
        const countryName = req.params.name;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        const countryData = response.data;
        res.json(countryData);
    } catch (error) {
        console.error('Error fetching country data:', error);
        res.status(500).json({ error: 'Failed to fetch country data from the API' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
