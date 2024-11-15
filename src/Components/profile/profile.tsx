import Image from 'next/image';
import React from 'react';

const UserCard = ({ user, role }) => {
    const handleDelete = (id) => {
        console.log("Suppression de l'utilisateur avec l'ID :", id);
    };

    const handleUpdate = (id) => {
        console.log("Mise à jour de l'utilisateur avec l'ID :", id);
    };

    return (
        <li className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-lg transition duration-300 hover:shadow-xl">
            <div className="flex flex-1 flex-col p-6">
                <div className="mt-4 text-sm font-medium text-gray-900">
                    <p className="font-bold">Prénom : {user.firstName}</p>
                    <p className="font-bold">Nom : {user.lastName}</p>
                    <p className="font-bold">Email : {user.email}</p>
                    <p className="font-bold">Mot de passe : ****</p>
                    <p className="font-bold">Rôle : {role.roleId}</p>
                </div>
            </div>
            {/* <div className="flex justify-center mt-4 gap-4 mb-4">
                <button
                    onClick={() => handleUpdate(user.userId)}
                    className="flex items-center text-blue-500 hover:text-blue-700 transition duration-200"
                    aria-label={`Mise à jour de ${user.firstName} ${user.lastName}`}
                >
                    <i className="fa-solid fa-pen-to-square mr-1"></i> Update
                </button>
                <button
                    onClick={() => handleDelete(user.userId)}
                    className="flex items-center text-red-500 hover:text-red-700 transition duration-200"
                    aria-label={`Suppression de ${user.firstName} ${user.lastName}`}
                >
                    <i className="fa-solid fa-trash mr-1"></i> Delete
                </button>
            </div> */}
        </li>
    );
};

export default UserCard;
