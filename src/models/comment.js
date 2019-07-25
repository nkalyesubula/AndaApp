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
    // associations can be defined here
    Comment.belongsTo(models.article, {
      as: "article",
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
    Comment.belongsTo(models.user, {
      as: "user",
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  };
  return Comment;
};
