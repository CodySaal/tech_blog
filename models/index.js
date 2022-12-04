const Blog = require("./Blog");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Blog.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Blog, {
    foreignKey: "blogg_id"
})

module.exports = { Blog, Comment, User };