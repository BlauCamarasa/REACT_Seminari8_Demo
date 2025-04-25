import React, { useState } from 'react';
import { User } from '../../types';
import style from './EditUser.module.css'; 

interface EditUserProps {
    user: User;
    onSave: (updatedUser: User) => void;
    onCancel: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState<User>({ ...user });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className={style.container}>
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit} className={style.form}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className={style.buttonGroup}>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
