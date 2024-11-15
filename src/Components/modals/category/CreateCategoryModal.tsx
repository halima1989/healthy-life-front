import { Modal, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import { ErrorMsg } from "../../error/Error";
import { createCategory } from "../../../Services/category";
import { CreateOrUpdateCategoryProps } from "../../../Utils/types";

const CreateCategoryModal = () => {
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

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CreateOrUpdateCategoryProps>();

    const onSubmit: SubmitHandler<CreateOrUpdateCategoryProps> = async (data) =>
        createCategory(data)
            .then((res: any) => {
                if (res.status === 201) {
                    handleClose();
                    toast.success("categorie Créé !");
                    return;
                } else {
                    handleClose();
                    toast.error(res.response.data.message[0]);
                }
            })
            .catch((e) => toast.error(e));
    return (
        <div>
            <button
                onClick={handleOpen}
                className="flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-3 justify-around items-center mr-3"
            >
                Ajouter une catégorie <MdAdd />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex items-center">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full flex flex-col gap-3"
                        >
                            {" "}
                            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                                Créer une nouvelle catégorie
                            </h1>
                            <div className="flex items-start flex-col justify-start">
                                <label
                                    htmlFor="name"
                                    className="text-sm text-gray-700 dark:text-black mr-2"
                                >
                                    Nom :
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <ErrorMsg error={"Nom"} />}
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={handleClose}
                                    className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
                                >
                                    Annuler
                                </button>
                                <input
                                    type="submit"
                                    className="bg-green-700 cursor-pointer text-white rounded-md text-center w-32 p-2 m-4 "
                                    value="Créer"
                                />
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateCategoryModal;
