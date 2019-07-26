"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id"
        }
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Article",
          key: "id"
        }
      },
      content: DataTypes.TEXT
    },
    {}
  );
  Comment.associate = function(models) {
    Comment.belongsTo(models.Article, {
      as: "Article",
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    Comment.belongsTo(models.User, {
      as: "User",
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return Comment;
};
