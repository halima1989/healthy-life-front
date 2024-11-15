import React from "react";
export type RadioProps = {
    value: string;
    label: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FilterRadio = (radio: RadioProps) => {
    return (
        <div key={radio.value} className="flex items-center cursor-pointer">
            <label className="flex items-center gap-3 cursor-pointer ml-3 min-w-0 flex-1 text-gray-500">
                <input
                    value={radio.value}
                    type="radio"
                    name="category"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={radio.handleChange}
                />
                {radio.label}
            </label>
        </div>
    );
};

export default FilterRadio;