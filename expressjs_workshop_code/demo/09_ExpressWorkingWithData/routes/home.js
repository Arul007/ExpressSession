exports.index = function(req, res) {
    res.render('home/index', {title: 'Wipro Technologies Page', firstParagraph: 'Welcome to the NodeJS and ExpressJS page'});
};

exports.contact = function(req, res) {
    res.render('home/contact', {email: "raj@yahoo.com", mobile: "7076735476"});
};
