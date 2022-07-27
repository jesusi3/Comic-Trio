const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const mangaSchema = new Schema({
    title: String,
    coverArtId: [],
    img: String,
    description: String,
    status: String,
    tags: {type: Schema.Types.ObjectId, ref:'Tag'},
    user: {
        type: Schema.Types.ObjectId , ref: "User"
    }

})
module.exports = mongoose.model('Manga', mangaSchema);