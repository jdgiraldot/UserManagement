import User from './model.js';

// Crear nuevo usuario
export const createUser = async (req, res) => {
    try {
        const { id, name, email, salary } = req.body;
        const user = new User({ id, name, email, salary });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un usuario por id personalizado
export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un usuario por id personalizado
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un usuario por id personalizado
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ id: req.params.id });
        if (user) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
