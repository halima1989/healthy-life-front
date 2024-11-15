"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ErrorMsg } from "../error/Error";
import { LoginProps } from "../../Utils/types";
import { loginUser } from "../../Services/auth";

const LoginForm = () => {
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>();

    const onSubmit: SubmitHandler<LoginProps> = (data) =>
        loginUser(data)
            .then((res: any) => {
                if (res.status === 200) {
                    toast.success("Connexion réussie !");
                    push("/");
                } else {
                    toast.error("Erreur de connexion");
                }
            })
            .catch((e) => toast.error("Erreur de connexion"));

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10 border border-gray-200">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Connexion
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        {errors.email && <ErrorMsg error={"L'email est requis."} />}
                        <input
                            type="email"
                            id="email"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Email"
                            autoComplete="email" // Ajout de l'attribut autocomplete
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div>
                        {errors.password && <ErrorMsg error={"Le mot de passe est requis."} />}
                        <input
                            type="password"
                            id="password"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Mot de passe"
                            autoComplete="current-password" // Ajout de l'attribut autocomplete
                            {...register("password", { required: true })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow-md"
                    >
                        SE CONNECTER
                    </button>
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            Vous n'avez pas de compte?{" "}
                            <a href="/myApp/register" className="text-green-500 hover:underline">
                                Créez un compte ici
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
