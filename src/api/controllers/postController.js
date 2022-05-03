const postService = require('../services/postService');
const JWT = require('../../helpers/JWT');

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { id: userId } = await JWT.verify(token);
  const post = await postService.getById(id, userId);
  return res.status(200).json(post);
};

const getBySearch = async (req, res) => {
  const { q: search } = req.query;
  const post = await postService.getBySearch(search);
  return res.status(200).json(post);
};

const create = async (req, res) => {
  const { title, content, categoryIds, id: userId } = req.body;
  const post = await postService.create({
    title,
    content,
    categoryIds,
    userId,
  });
  return res.status(201).json(post);
};

const updateById = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const post = await postService.updateById({ title, content, id });
  return res.status(200).json(post);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await postService.deleteById(id);
  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  getBySearch,
  create,
  updateById,
  deleteById,
};
