const { Op } = require('sequelize');

const Models = require('../database/models');
const errorHandler = require('../../helpers/errorHandler');

const getAll = () =>
  Models.BlogPost.findAll({
    include: [
      { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getById = async (id) => {
  const post = await Models.BlogPost.findOne({
    where: { id },
    include: [
      { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) throw errorHandler('Post does not exist', 404);
  return post;
};

const getBySearch = async (search) => {
  if (!search) return getAll();
  const post = await Models.BlogPost.findAll({
    where: { [Op.or]: [{ title: search }, { content: search }] },
    include: [
      { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const create = async ({ title, content, categoryIds, userId }) => {
  const post = await Models.BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  await Promise.all(
    categoryIds.map((categoryId) =>
      Models.PostsCategory.create({
        postId: post.dataValues.id,
        categoryId,
      })),
  );
  return post;
};

const updateById = async ({ title, content, id }) => {
  await Models.BlogPost.update(
    {
      title,
      content,
      updated: new Date(),
    },
    { where: { id } },
  );
  return getById(id);
};

const deleteById = (id) => Models.BlogPost.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  getBySearch,
  create,
  updateById,
  deleteById,
};
