import axios from 'axios'
export const getAllProducts = async () => {
    const response = await fetch('http://localhost:3002/product/all') // Mettez l'URL correcte de votre API
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des produits')
    }
    return response.json() // Supposons que l'API retourne les produits sous forme de JSON
}

// export const getAllProducts = async () => {
//     try {
//         const response = await axios.get('http://localhost:3002/product/all') // Remplacez l'URL selon votre API
//         return response.data // Retourne les produits
//     } catch (error) {
//         console.error('Erreur lors de la récupération des produits', error)
//         return []
//     }
// }

// import axios from 'axios'
// import { CreateProductProps, UpdateProductProps } from '../Utils/types'

// const axiosCreate = axios.create({
//     baseURL: 'http://localhost:3002/', // Utilisez baseURL ici
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

// export const getAllProducts = () => axiosCreate.get('/product/all')

// export const getOneProduct = (id: number) =>
//   axiosCreate.get(`/product/one/${id}`);

// import axios from 'axios'
// // import { CreateProductProps, UpdateProductProps } from "../Utils/types";

// export async function getAllProducts() {
//     const url = `${process.env.NEXT_PUBLIC_API_URL}product/all`

//     const axiosConfig = {
//         headers: {
//             'content-type': 'application/json',
//         },
//     }
//     return axios
//         .get(url, axiosConfig)
//         .then((res) => {
//             return res
//         })
//         .catch((e) => {
//             return e
//         })
// }

export async function getOneProduct(id: string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}product/one/${id}`

    const axiosConfig = {
        headers: {
            'content-type': 'application/json',
        },
    }
    return axios
        .get(url, axiosConfig)
        .then((res) => {
            return res
        })
        .catch((e) => {
            return e
        })
}
export async function uploadImage(formData: FormData) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}image/upload`

    const axiosConfig = {
        headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    }
    return axios
        .post(url, formData, axiosConfig)
        .then((res) => {
            return res
        })
        .catch((e) => {
            return e
        })
}
// export async function createProduct(product: CreateProductProps) {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}product/add`;

//   const axiosConfig = {
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .post(url, product, axiosConfig)
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       return e;
//     });
// }

// export async function updateProduct(id: string, product: UpdateProductProps) {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}product/update/${id}`;

//   const axiosConfig = {
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .patch(url, product, axiosConfig)
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       return e;
//     });
// }

// export async function deleteProduct(id: string) {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}product/delete/${id}`;

//   const axiosConfig = {
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .delete(url, axiosConfig)
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       return e;
//     });
// }
// import axios from "axios";
// import { CreateProductProps, UpdateProductProps } from "../Utils/types";

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Fonctions de requêtes
// export async function getAllProducts() {
//   try {
//     const response = await axiosInstance.get("/product/all");
//     return response.data;
//   } catch (error) {
//     console.error("Erreur lors de la récupération des produits :", error);
//     throw error;
//   }
// }

// export async function getOneProduct(id: string) {
//   try {
//     const response = await axiosInstance.get(`/product/one/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(
//       `Erreur lors de la récupération du produit avec id ${id} :`,
//       error
//     );
//     throw error;
//   }
// }

// export async function uploadImage(formData: FormData) {
//   try {
//     const response = await axiosInstance.post("/image/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Erreur lors du téléchargement de l'image :", error);
//     throw error;
//   }
// }

// export async function createProduct(product: CreateProductProps) {
//   try {
//     const response = await axiosInstance.post("/product/add", product);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur lors de la création du produit :", error);
//     throw error;
//   }
// }

// export async function updateProduct(id: string, product: UpdateProductProps) {
//   try {
//     const response = await axiosInstance.patch(
//       `/product/update/${id}`,
//       product
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       `Erreur lors de la mise à jour du produit avec id ${id} :`,
//       error
//     );
//     throw error;
//   }
// }

// export async function deleteProduct(id: string) {
//   try {
//     const response = await axiosInstance.delete(`/product/delete/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(
//       `Erreur lors de la suppression du produit avec id ${id} :`,
//       error
//     );
//     throw error;
//   }
// }
