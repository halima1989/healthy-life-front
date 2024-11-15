import axios from "axios";
import { CreateOrUpdateCategoryProps } from "../Utils/types";

export async function getAllCategory() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function getOneCategory(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/one/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function createCategory(category: CreateOrUpdateCategoryProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/add`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, category, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function updateCategory(
  id: string,
  category: CreateOrUpdateCategoryProps
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/update/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, category, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deleteCategory(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/delete/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
