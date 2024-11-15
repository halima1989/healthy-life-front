// 'use client';

// import { useRouter } from 'next/navigation';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import React from 'react';
// import toast from 'react-hot-toast';
// import { ResetPasswordProps } from '../../../Utils/types';
// import PasswordInput from '../../../Components/PasswordInput';
// import { resetPassword } from '../../../Services/auth';
// import { resetPasswordResolver } from '../../../Utils/resolvers/resetPasswordResolver';

// const Page = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<ResetPasswordProps>({
//         resolver: resetPasswordResolver,
//     });

//     const { push } = useRouter();

//     const handleRequest = async (data: ResetPasswordProps) => {
//         try {
//             await resetPassword(data);
//             toast.success('Mot de passe mis à jour');
//             push('/login');
//         } catch (e: any) {
//             const errorMessage = e?.response?.data?.message || 'Code invalide';
//             toast.error(errorMessage);
//         }
//     };

//     const onSubmitPassword: SubmitHandler<ResetPasswordProps> = (data) => handleRequest(data);

//     return (
//         <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img src="/banniere-mithieux.svg" alt="Mithieux" />
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                     Changement de mot de passe
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-6">
//                     <PasswordInput
//                         id="password1"
//                         label="Entrer votre nouveau mot de passe"
//                         register={register('password')}
//                         error={errors.password}
//                     />
//                     <PasswordInput
//                         id="password2"
//                         label="Confirmer votre nouveau mot de passe"
//                         register={register('confirmPassword')}
//                         error={errors.confirmPassword}
//                     />
//                     <button
//                         type="submit"
//                         className="flex w-full justify-center rounded-md bg-customBlue px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-customBlue"
//                     >
//                         Valider
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Page;
