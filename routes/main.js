const express = require('express');
const router = express.Router();
const Categorie = require('../controllers/categorieController');
const Tale = require('../controllers/taleController');

router.get('/',(req,res)=>{
	let opt = {
		page: 'home'
	};
	Tale.getAll((err,tales)=>{
		if(err){
			console.log(err);
		} else {
			opt.tales = tales;
			res.render('template/index',opt);
		}
	});
	
});

router.get('/tale/:id',(req,res)=>{
	let opt = {
		page: 'tale'
	};
	let id = req.params.id;
	Tale.getById(id,(err,tale)=>{
		if(err){
			console.log(err);
		} else {
			opt.tale = tale;
			res.render('template/tale',opt);
		}
	});
});




module.exports=router;
