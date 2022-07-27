const Manga = require('../models/manga');
const fetch = require('node-fetch');
const rootURL = 'https://api.mangadex.org/';


module.exports = {
    index,
    show,
    create,
    home
}
async function index(req, res) {
    let data = await Manga.find({user: req.user._id});
    // console.log(data);
    res.render('mangas/index', {data})
    
    
}

async function show(req, res) {
    let datas = await Manga.findById(req.params.id);
    res.render('mangas/show', { datas });
}


async function create(req,res) {
    let art;
    req.body.user = req.user._id;
    req.body.coverArtId = JSON.parse( req.body.coverArtId);
    req.body.coverArtId.forEach(async function(el){
        if(el.type === 'cover_art'){
            req.body.coverId = el.id
        }
    });
    let response = await fetch(`${rootURL}cover/${req.body.coverId}`, {method: 'GET'});
    const five = await response.json();
    const cover = five.data.attributes.fileName;
    art = `https://uploads.mangadex.org/covers/${req.body.mangaId}/${cover}`
    console.log(art, 'five');
    req.body.img = art;
    console.log(req.body.img, 'image');
    let manga = await new Manga(req.body);
    let two = await manga.save();
    res.redirect('/mangas/home');
   
}
async function home(req, res) {
    const response = await fetch(`${rootURL}manga` , {method: 'GET'});
    const five = await response.json();
    const mangas = five.data;
    res.render('mangas/all', {mangas})
}