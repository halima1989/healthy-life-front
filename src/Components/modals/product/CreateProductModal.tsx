"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import { CategoryProps, CreateProductProps } from "../../../Utils/types";
import { ErrorMsg } from "../../error/Error";
import { getAllCategory } from "../../../Services/category";
import { uploadImage, createProduct } from "../../../Services/product";

const CreateProductModal = () => {
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
    const [open, setOpen] = useState(false);

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateProductProps>();

    const onSubmit: SubmitHandler<CreateProductProps> = async (data) => {
        if (data.file && data.file[0]) {
            const formData = new FormData();
            formData.append("file", data.file[0]);

            try {
                const uploadResponse = await uploadImage(formData);
                const filename = uploadResponse.data;

                const productData = {
                    name: data.name,
                    description: data.description,
                    price: Number(data.price),
                    categoryId: data.categoryId,
                    image: filename.toString(),
                };

                await createProduct(productData);
                toast.success("Produit créé avec succès");
                handleClose();
            } catch (error) {
                toast.error("Échec de la création du produit");
            }
        }
    };

    useEffect(() => {
        getAllCategory().then((res) => {
            setCategoryList(res.data);
        });
    }, []);

    return (
        <div>
            <button
                onClick={handleOpen}
                className="flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-3 justify-around items-center mr-3"
            >
                Ajouter un produit <MdAdd />
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
                            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                                Ajouter un produit
                            </h1>

                            <div className="flex items-start flex-col justify-start">
                                <label htmlFor="name" className="text-sm text-gray-700 dark:text-black mr-2">
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

                            {/* Repeat similar structure for other fields */}

                            <div className="flex items-start flex-col justify-start">
                                <label htmlFor="categoryId" className="text-sm text-gray-700 dark:text-black mr-2">
                                    Catégorie :
                                </label>
                                <select
                                    defaultValue=""
                                    className="border text-center w-full h-10 rounded-md border-black text-sm text-gray-700 dark:text-black"
                                    {...register("categoryId", { required: true })}
                                >
                                    <option value="">Choisir une catégorie</option>
                                    {categoryList.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.categoryId && <ErrorMsg error={"catégorie"} />}
                            </div>

                            <div className="flex items-center">
                                <button
                                    type="button"
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

export default CreateProductModal;
