
const { Op } = require('sequelize');
const News = require('../models/News');

class NewsController {
    // Get all news
    async getAll(req, res) {
        try {
            const news = await News.findAll();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Create a new news entry
    async create(req, res) {
        try {
            const { title, author, description, content, url, url_image, published_at, category } = req.body;

            if (!title || !author || !category) {
                return res.status(422).json({ error: "Title, Author, and Category are required" });
            }

            const news = await News.create({ title, author, description, content, url, url_image, published_at, category });
            res.status(201).json(news);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Edit a news entry
    async update(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await News.update(req.body, {
                where: { id }
            });

            if (updated) {
                const updatedNews = await News.findByPk(id);
                res.status(200).json(updatedNews);
            } else {
                res.status(404).json({ error: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete a news entry
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await News.destroy({ where: { id } });

            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get detail of a specific news entry
    async getDetail(req, res) {
        try {
            const news = await News.findByPk(req.params.id);
            if (news) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ error: 'Resource not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Search resource
    async search(req, res) {
        try {
            const { title } = req.params;
            const news = await News.findAll({
                where: { title: { [Op.like]: `%${title}%` } }
            });

            if (news.length > 0) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ error: 'No results found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get sport news
    async getSport(req, res) {
        try {
            const news = await News.findAll({ where: { category: 'sport' } });
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get finance news
    async getFinance(req, res) {
        try {
            const news = await News.findAll({ where: { category: 'finance' } });
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get automotive news
    async getAutomotive(req, res) {
        try {
            const news = await News.findAll({ where: { category: 'automotive' } });
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


const newsController = new NewsController();


module.exports = newsController;
