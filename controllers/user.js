exports.getIndex = (req, res, next) => {
    res.render('user/index', {
        pageTitle: 'Abacus - home',
        path: '/',
    })
}