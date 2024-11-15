import React from 'react'
import { ErrorMsg } from './error/Error';

const PasswordInput = ({ id, label, register, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">
            {label}
        </label>
        <div className="mt-2">
            <input
                id={id}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6 indent-3"
                {...register(id)}
            />
        </div>
        {error && <ErrorMsg error={'erreur'} />}
    </div>
);
export default PasswordInput
