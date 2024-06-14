const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000;
const apiKey = '70d7de7668784a22a981eebf7e021194';
app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome to the Football Data API!');
});

app.get('/teams', async (req, res) => {
    try {
        const response = await fetch('https://api.football-data.org/v4/competitions/PD/teams', {
            headers: {
                'X-Auth-Token': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data); // Отправляем данные клиенту
    } catch (error) {
        console.error('Fetch error: ', error);
        res.status(500).send(`Error: ${error.message}`);
    }
});
app.get('/teams/:id/squad', async(req, res) => {
    const teamId = req.params.id
    try{
        const response = await fetch(`https://api.football-data.org/v4/competitions/PD/teams/${teamId}`, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    } catch(error){
        console.error('Fetch error: ', error);
        res.status(500).send(`Error: ${error.message}`);
    }
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

