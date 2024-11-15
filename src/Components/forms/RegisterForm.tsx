"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ErrorMsg } from "../error/Error";
import { RegisterProps } from "../../Utils/types";
import { registerUser } from "../../Services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../app/myApp/validation/validationForm";

const RegisterForm = () => {
    const { push } = useRouter();
    const { handleSubmit, register, formState: { errors } } = useForm<RegisterProps>({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "", lastName: "", email: "", password: "", gdpr: false
        }
    });

    const onSubmit: SubmitHandler<RegisterProps> = (data) =>
        registerUser(data)
            .then((res: any) => {
                localStorage.setItem("token", res.data.access_token);
                toast.success("Inscription réussie !");
                setTimeout(() => push("/myApp/login"), 1000);
            })
            .catch((e) => {
                console.log(e);
                toast.error("Une erreur est survenue lors de l'inscription.");
            });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10 border border-gray-200">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Créez un compte
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <ErrorMsg error={"L'email est requis."} />}
                    </div>

                    <div>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Prénom"
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <ErrorMsg error={"Le prénom est requis."} />}
                    </div>

                    <div>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Nom de famille"
                            {...register("lastName", { required: true })}
                        />
                        {errors.lastName && <ErrorMsg error={"Le nom de famille est requis."} />}
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Mot de passe"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <ErrorMsg error={"Le mot de passe est requis."} />}
                    </div>

                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="mr-2 h-4 w-4 text-green-500 focus:ring-2 focus:ring-green-400"
                            {...register("gdpr", { required: true })}
                        />
                        {errors.gdpr && <ErrorMsg error={"Vous devez accepter les conditions."} />}
                        <label htmlFor="checkbox" className="text-gray-600 text-sm">
                            J'accepte les{" "}
                            <a href="#" className="text-green-500 hover:underline">
                                Termes et Conditions
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow-md"
                    >
                        S'ENREGISTRER
                    </button>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            Vous avez déjà un compte?{" "}
                            <a href="/myApp/login" className="text-green-500 hover:underline">
                                Connectez-vous ici
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
