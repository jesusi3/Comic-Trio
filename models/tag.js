 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema ({
    tagName: {
        type: String,
        
        
    }
})

module.exports = moongoose.model('Tag', tagSchema)