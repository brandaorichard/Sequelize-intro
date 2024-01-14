const UserService = require('../services/user.service');

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' })
  }
};

const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await UserService.getByIdAndEmail(id, email)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    } return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await UserService.createUser(fullName, email);
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const updatedUser = await UserService.updateUser(id, fullName, email);
    if (!updateUser) {
      return res.status(404).json({ message: 'User not found'})
    } return res.status(200).json({ message: 'User updated successfully'})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);
    return res.status(200).json({ message: 'User deleted successfully!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' })
  }
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
}