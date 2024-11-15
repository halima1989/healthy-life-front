import { Tooltip, Modal, Box } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CategoryProps } from '../../../Utils/types';
import { deleteCategory } from '../../../Services/category';

const DeleteCategoryModal = ({ category }: { category: CategoryProps }) => {
    const categoryId = category.id;
    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function HandleDeleteCategory() {
        deleteCategory(categoryId)
            .then((res) => {
                if (res.status === 200) {
                    handleClose();
                    toast.success("Supprimé avec succès");
                    return;
                }
                toast.error(res.response.data.message[0]);
                handleClose();
            })
            .catch((e) => toast.error(e));
    }

    return (
        <div>
            <Tooltip title="Supprimer cette catégorie">
                <button
                    onClick={handleOpen}
                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="flex justify-center">Confirmer la suppression de cette catégorie ?</p>
                    <div className="flex items-center">
                        <button
                            onClick={handleClose}
                            className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
                        >
                            Annuler
                        </button>
                        <button
                            className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
                            onClick={() => {
                                HandleDeleteCategory();
                            }}
                        >
                            Supprimer
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteCategoryModal;
