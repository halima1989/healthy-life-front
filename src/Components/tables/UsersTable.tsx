import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';

const VISIBLE_FIELDS = ['firstName', 'lastName', 'email'];

export default function getAllUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fonction pour récupérer les utilisateurs
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/all`);
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs :", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Définition des colonnes visibles
    const columns = [
        { field: 'firstName', headerName: 'Prénom', width: 150 },
        { field: 'lastName', headerName: 'Nom', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                loading={loading}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    );
}
