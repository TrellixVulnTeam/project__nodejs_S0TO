const Toy = require('../models/Toy');


class SiteController {

    //[GET]
    index(req, res, next){         
        Toy.find({})
        .then(toys => {
            
            toys=toys.map(toys => toys.toObject())
            res.render('home', {toys});
        })
        .catch(next);

        // ;
    }
}

module.exports = new SiteController;