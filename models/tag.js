 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema ({
    tagName: {
        type: String,
        enum: ['Action', 'Adventure', 'Comdey', 'Drama','Fantasy', 'Harem' , 'Historical','Slice of Life']
        
    }
})

module.exports = moongoose.model('Tag', tagSchema)