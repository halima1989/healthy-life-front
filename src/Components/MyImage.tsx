import React from 'react';

const MyImage = () => {
    return (
        <div style={styles.container}>
            <img src="/images/photo-1596438820487-d54464e763d7.avif" alt="Healthy Life" style={styles.image} />
            <div style={styles.textOverlay1}>Bienvenue sur Healthy Life</div>
            <div style={styles.textOverlay2}>
                Parce que votre bien-être commence par les bons choix.<br />
                Découvrez notre sélection naturelle aujourd'hui !
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        color: '#fff',
    },
    image: {
        width: '100%',
        height: '60%',
        objectFit: 'cover',
    },
    textOverlay1: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '3em',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px 20px',
        borderRadius: '8px',
        fontFamily: `'Montserrat', sans-serif`, // Applique Montserrat

    },
    textOverlay2: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1em',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '40px 20px',
        borderRadius: '8px',
        fontFamily: `'Montserrat', sans-serif`, // Applique Montserrat

    },

};

export default MyImage;
