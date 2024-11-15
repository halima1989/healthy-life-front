"use client"
import React from 'react'
import MyImage from '@/Components/MyImage';


const HomePage = () => {
    // Styles
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: '#f8f9fa',
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
        },
        logoImage: {
            height: '50px',
        },
        searchBar: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 20px',
        },
        searchInput: {
            width: '100%',
            maxWidth: '400px',
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        actions: {
            display: 'flex',
            gap: '10px',
        },
        button: {
            padding: '8px 16px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#A8D08D',
            color: '#fff',
            border: 'none',
        },
    }

    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('role');

        console.log('Utilisateur déconnecté');

    };

    return (
        <div>
            <div style={styles.container}>
                {/* Logo */}
                <div style={styles.logo}>
                    <img src="/images/1000_F_158877761_vSJ4nKTUvQG8OYgsIJUTpeBwiqm6cynN-removebg-preview.png" alt="Logo" style={styles.logoImage} />
                </div>

                {/* Barre de recherche */}
                <div style={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        style={styles.searchInput}
                    />
                </div>

                {/* Boutons à droite */}
                <div style={styles.actions}>
                    <button style={styles.button}>Mon compte</button>
                    <button onClick={handleLogout} style={styles.button}>Log out</button>
                </div>
            </div>
            <MyImage />


        </div>
    );

};


export default HomePage;



