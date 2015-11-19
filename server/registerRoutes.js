export default (router) => {
    router.get('/', (req, res) => {
        res.render('index', { title: 'Index page' });
    });

    return router;
}
