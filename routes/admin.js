const express = require('express');
const router = express.Router();
const Categorie = require('../controllers/categorieController');
const Tale = require('../controllers/taleController');
const User = require('../controllers/usersController');


// get requests
router.get('/', (req, res) => {
    let opt = {
        page: 'login'
    };
    res.render('admin/login', opt);
});

router.get('/dashboard', User.checkAuth, (req, res) => {
    let opt = {
        page: 'dashboard',
        user: req.user
    };
    res.render('admin/dashboard', opt);
});

router.get('/categories', User.checkAuth, (req, res) => {
    let opt = {
        page: 'categories',
        user: req.user
    };
    Categorie.getCategories((err, data) => {
        if (err) {
            console.log(err);
        } else {
            opt.categories = data;
            res.render('admin/categories', opt);
        }
    });

});

router.get('/addtale', User.checkAuth, (req, res) => {
    let opt = {
        page: 'addtale',
        user: req.user
    };
    Categorie.getCategories((err, data) => {
        if (err) {
            console.log(err);
        } else {
            opt.categories = data;
            res.render('admin/addtale', opt);
        }
    });
});

router.get('/tales', User.checkAuth, (req, res) => {
    let opt = {
        page: 'tales',
        user: req.user
    };
    res.render('admin/tales', opt);
});


router.get('/addcategorie', User.checkAuth, (req, res) => {
    let opt = {
        page: 'addcategorie',
        user: req.user
    };
    res.render('admin/addcategorie', opt);
});

router.get('/editcategory/:id', User.checkAuth, (req, res) => {
    let opt = {
        page: 'editcategory',
        user: req.user
    };
    let id = req.params.id ? req.params.id : null;
    Categorie.getCategorieById(id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            opt.categorie = data;
            res.render('admin/addcategorie', opt);
        }
    });
});


// post requests
router.post('/login', User.adminLogin);
router.post('/addcategorie', User.checkAuth, Categorie.addCategorie);
router.post('/addtale',User.checkAuth, Tale.allNew);

router.post('/editcategorie', User.checkAuth, (req, res) => {
    Categorie.editCategorie(req, res);
});


//delete requests

router.delete('/removecategory', User.checkAuth, (req, res) => {
    Categorie.removeCategory(req, res);
});


module.exports = router;
