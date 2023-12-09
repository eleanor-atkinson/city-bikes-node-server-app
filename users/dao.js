import User from "./model.js";

export const createUser = (user) => User.create(user);

export const findAllUsers = () => User.find();

export const findUserById = (userId) => User.findById(userId);

export const findUserByUsername = (username) =>
  User.findOne({ username: username });

export const findUserByCredentials = (username, password) =>
  User.findOne({ username, password });

export const updateUser = (userId, user) =>
  User.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => User.deleteOne({ _id: userId });
