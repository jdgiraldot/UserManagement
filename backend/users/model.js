import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);

export default User;