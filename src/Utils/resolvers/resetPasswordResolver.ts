import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Définition des règles de validation avec Yup
const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .matches(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .matches(
      /[@$!%*?&#]/,
      "Le mot de passe doit contenir au moins un caractère spécial"
    ),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("Veuillez confirmer votre mot de passe"),

  token: Yup.string().required("Le code de réinitialisation est requis"),
});

// Exportation du resolver pour être utilisé dans le formulaire
export const resetPasswordResolver = yupResolver(resetPasswordSchema);
