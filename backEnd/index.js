require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const server = express();
const getData=async (req, res) => {
    try {
      const fetchData = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kuuZy2gdWl6vOavIi0oWGAxEsTC4LZIS");
      res.json(fetchData.data.results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
server.use(cors())
.get('/api/news',getData)
.listen(process.env.PORT);
