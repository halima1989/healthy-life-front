import { Tooltip, Modal, Box } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { CategoryProps, CreateOrUpdateCategoryProps } from "../../../Utils/types";
import { updateCategory } from "../../../Services/category";
import { ErrorMsg } from "../../error/Error";

const UpdateCategoryModal = ({ category }: { category: CategoryProps }) => {
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

    const onSubmit: SubmitHandler<CreateOrUpdateCategoryProps> = (data) =>
        updateCategory(category.id, data)
            .then((res) => {
                if (res.status === 200) {
                    handleClose();
                    toast.success("Catégorie mise à jour !");
                    return;
                } else {
                    handleClose();
                    toast.error(res.response.data.message[0]);
                }
            })
            .catch((e) => toast.error(e));

    return (
        <div>
            <Tooltip title="Modifier cette catégorie">
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
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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
                    <div className="flex items-center">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full flex flex-col gap-3"
                        >
                            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                                Modifier la catégorie
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
                                    defaultValue={category.name}
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
                                    value="Mettre à jour"
                                />
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateCategoryModal;
