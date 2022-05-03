module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {});

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostsCategory;
};
