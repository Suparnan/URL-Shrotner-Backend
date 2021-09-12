const mongoose = require("mongoose");

const shortnerSchema = new mongoose.Schema({
    
    urlcode: {
        type: String,
    },
    longurl: {
        type: String,
        required: true,
    },
    shorturl:{
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
}
);

module.exports = mongoose.model("Urlshortner", shortnerSchema);