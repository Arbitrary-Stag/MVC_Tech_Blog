const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const posts = await Post.findAll();
  const mappedPosts = posts.map(post => post.get({ plain: true }));

  const comments = [
  'I like chocolate milk.',
  'I like potatoes.',
  'I LIKE CHOCOLATE MILK!!!!'];

  for (let i = 0; i < 3; i++) {
    await Comment.create({
      comment: comments[i],
      user_id: users[i].id,
      post_id: mappedPosts[i].id,
    });
  }

  process.exit(0);
};

seedDatabase();