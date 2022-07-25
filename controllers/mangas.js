const Manga = require('../models/manga');

module.exports = {
    index
}
function index(req, res) {
    res.render('mangas/index')
}