const express = require('express');
const router = express.Router();
const Urlshortner = require('../models/shortner.js');

router.get('/:code', async(request, response) => {
    try{
        const { code } = request.params;
        console.log("This is code",code);

        const url = await Urlshortner.findOne({ urlcode: code});
        console.log(url);

        if(url) {
            console.log("Inside if condition");
            return response.redirect(url.longurl);
        } else {
            return response.status(404).json({message:"URL Not Found"});
        }
    } catch(error) {
        console.error(error.message);
        response.status(500).json({message:"Server Error"});
    }
});

module.exports = router;