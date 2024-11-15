import React from "react";
export type CheckboxProps = {
    value: string,
    label: string,
    checked: boolean
}
const FilterCheckbox = (checkbox: CheckboxProps) => {
    return (
        <div key={checkbox.value} className="flex items-center">
            <input
                defaultValue={checkbox.value}
                defaultChecked={checkbox.checked}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
                className="ml-3 min-w-0 flex-1 text-gray-500"
            >
                {checkbox.label}
            </label>
        </div>
    );
};

export default FilterCheckbox;