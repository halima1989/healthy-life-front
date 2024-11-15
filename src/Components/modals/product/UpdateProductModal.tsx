"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CategoryProps, UpdateProductProps } from "../../../Utils/types"; // Assurez-vous d'avoir le type approprié
import { ErrorMsg } from "../../error/Error";
import { getAllCategory } from "../../../Services/category";
import { updateProduct, uploadImage } from "../../../Services/product"; // Assurez-vous que la fonction updateProduct est créée dans votre service

const UpdateProductModal = ({ product, open, handleClose }) => {
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<UpdateProductProps>(); // Assurez-vous que UpdateProductProps contient les champs nécessaires

    const onSubmit: SubmitHandler<UpdateProductProps> = async (data) => {
        const productData: UpdateProductProps = {
            id: product.id,
            name: data.name,
            description: data.description,
            price: Number(data.price),
            categoryId: data.categoryId,
            image: product.image || "",
        };

        // Gestion du téléchargement de l'image
        if (data.newImageFile && data.newImageFile[0]) {
            const formData = new FormData();
            formData.append("file", data.newImageFile[0]);

            try {
                const uploadResponse = await uploadImage(formData);
                const filename = uploadResponse.data;
                productData.image = filename.toString(); // Mettez à jour l'image uniquement si un nouveau fichier est téléchargé
            } catch (error) {
                toast.error("Échec de l'upload de l'image");
                return;
            }
        }

        try {
            await updateProduct(product.id, productData); // Mettez à jour le produit
            toast.success("Produit mis à jour avec succès");
            handleClose();
        } catch (error) {
            toast.error("Échec de la mise à jour du produit");
        }
    };

    useEffect(() => {
        getAllCategory().then((res) => {
            setCategoryList(res.data);
        });

        // Remplissez les champs du formulaire avec les données du produit
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("categoryId", product.categoryId);
    }, [product, setValue]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ /* même style que dans CreateProductModal */ }}>
                <div className="flex items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
                        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                            Mettre à jour le produit
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

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="description" className="text-sm text-gray-700 dark:text-black mr-2">
                                Description :
                            </label>
                            <textarea
                                id="description"
                                className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <ErrorMsg error={"Description"} />}
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="price" className="text-sm text-gray-700 dark:text-black mr-2">
                                Prix :
                            </label>
                            <input
                                type="number"
                                id="price"
                                className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                {...register("price", { required: true, min: 0 })}
                            />
                            {errors.price && <ErrorMsg error={"Prix"} />}
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="categoryId" className="text-sm text-gray-700 dark:text-black mr-2">
                                Catégorie :
                            </label>
                            <select
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

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="file" className="text-sm text-gray-700 dark:text-black mr-2">
                                Image :
                            </label>
                            <input
                                type="file"
                                id="file"
                                className="border rounded-md border-gray-300 dark:border-gray-700"
                                {...register("newImageFile")} // Assurez-vous que le nom correspond à la propriété de votre type
                            />
                        </div>

                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4"
                            >
                                Annuler
                            </button>
                            <input
                                type="submit"
                                className="bg-green-700 cursor-pointer text-white rounded-md text-center w-32 p-2 m-4"
                                value="Mettre à jour"
                            />
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
};

export default UpdateProductModal;
