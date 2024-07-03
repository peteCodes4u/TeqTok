const router = require('express').Router();
const { Article } = require('../../models');

// get all articles
router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll(
            { include: [{ all: true, nested: true }] }
        );
        res.status(200).json((articleData));
    } catch (err) { res.status(500).json(err) }
});

// update articles
router.put('/:id', async(req, res) => {
    try {

       const postData = {
        title: req.body.title,
        blog: req.body.blog,
       } 

        await Article.update(postData, { where: { id: req.params.id}});
        
        res.status(200).json({ message: 'you have successfully updated your post'})

    } catch (err) {res.status(422).json(err)}
});


module.exports = router;