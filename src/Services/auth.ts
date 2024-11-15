// import axios, { AxiosError } from "axios";
// import { LoginProps, RegisterProps } from "../Utils/types";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// export async function registerUser(user: RegisterProps) {
//   try {
//     const { data } = await axios.post(`${apiUrl}auth/signup`, user, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error(
//         "Registration error:",
//         error.response?.data || error.message
//       );
//     }
//     throw error;
//   }
// }

// export async function loginUser(user: LoginProps) {
//   try {
//     const { data } = await axios.post(`${apiUrl}auth/signin`, user, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error("Login error:", error.response?.data || error.message);
//     }
//     throw error;
//   }
// }

// export async function activateAccount(token: string) {
//   try {
//     const { data } = await axios.get(`${apiUrl}auth/activate?token=${token}`, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error("Activation error:", error.response?.data || error.message);
//     }
//     throw error;
//   }
// }

// export async function resetPassword(token: string) {
//   try {
//     const { data } = await axios.get(`${apiUrl}auth/reset?token=${token}`, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error(
//         "Reset password error:",
//         error.response?.data || error.message
//       );
//     }
//     throw error;
//   }
// }

import axios from "axios";
import { LoginProps, RegisterProps } from "../Utils/types";

export async function registerUser(user: RegisterProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function loginUser(user: LoginProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function activateAccount(token: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/activate/${token}`;
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

export async function resetPassword(token: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}reset/${token}`;
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
