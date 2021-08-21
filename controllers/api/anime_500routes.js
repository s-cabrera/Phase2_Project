const router = require('express').Router();
const {Anime_500} = require('../../models');

router.get('/animelist', async (req, res) => {
	try {
		const animeData = await Anime_500.findAll({
			attributes: ['title']
		});
		//console.log(animeData);
		const animes = animeData.map((e) => e.get({ plain: true }));
		res.render('animelist', {animes});
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;