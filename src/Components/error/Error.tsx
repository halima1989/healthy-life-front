import React from "react";

export const ErrorMsg = (errorName: { error: string }) => {
    return (
        <p className="text-red-500 w-3/4 self-start text-xs italic">{errorName.error}</p>
    );
};