export default (router) => {
    router.get('/', (req, res) => {
        res.render('pages/home', { title: 'Index page', homePageActive: true });
    });

    router.get('/any-page', (req, res) => {
        res.render('pages/any', { title: 'Any page', anyPageActive: true });
    });

    router.get('/dropdown-page/:selection', (req, res) => {
        res.render('pages/dropdown', { title: 'Dropdown page', selection: req.params.selection });
    });

    return router;
};
