"use client";
import classNames from "classnames";
import { useState } from "react";
type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const burgerClasses = [
        classNames("duration-500 block w-10 h-px bg-white", {
            "transition-transform  duration-500 rotate-45 translate-y-3.5":
                props.isOpen,
        }),
        classNames("duration-500 block w-6 h-px bg-white mx-auto", {
            "duration-500 invisible opacity-0 ": props.isOpen,
        }),
        classNames("duration-500 block w-10 h-px bg-white", {
            "transition-transform  duration-500 -rotate-45 -translate-y-3.5":
                props.isOpen,
        }),
    ];

    const handleMenu = (): void => {
        props.setIsOpen((previous) => !previous);
    };

    return (
        <div
            className="space-y-2 w-10 ml-4 self-center min-[1280px]:hidden cursor-pointer z-10 min-[320px]:scale-[.8] sm:scale-100"
            onClick={handleMenu}
        >
            <span className={burgerClasses[0]}></span>
            <span className={burgerClasses[1]}></span>
            <span className={burgerClasses[1]}></span>
            <span className={burgerClasses[2]}></span>
        </div>
    );
};