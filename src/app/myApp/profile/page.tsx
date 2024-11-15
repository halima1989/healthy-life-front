"use client"; // Assurez-vous que cela est au début de votre fichier

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getOneUser } from "../../../Services/user";
import { LoaderIcon } from "react-hot-toast";
import UserCard from "../../../Components/profile/profile";


const Page = () => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getOneUser(); // Fonction pour récupérer les données de l'utilisateur
                setUser(response.user);
                setRole(response.role); // Assurez-vous que la réponse contient le rôle
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur", error);
            }
        };

        fetchUserData();
    }, []);

    // Utilisez le loader pendant le chargement des données
    if (!user || !role) return <LoaderIcon />;

    return (
        <main>
            <h1>Profil de l'utilisateur</h1>
            <UserCard user={user} role={role} />
        </main>
    );
};

export default Page;
