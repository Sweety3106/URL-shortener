const express = require("express")
const { handlegenerateNewShortURL , handleredirectmainURL, handleGetAnalytics} = require("../controllers/url")


const router = express.Router();

router.post('/', handlegenerateNewShortURL)

router.get('/:shortid', handleredirectmainURL )

router.get('/analytics/:shortId' , handleGetAnalytics)

module.exports = router;