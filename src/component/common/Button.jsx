import React from "react";
import { cn } from "../../lib/utilities";

const Button = ({
    variant = "primary",
    children,
    className = "",
    ...props
}) => {
    const variants = {
        outline:
            "border-[0.125rem] border-[#8C7050] text-[#8C7050] rounded-[50px] text-base ",
        primary: "bg-[#8C7050] rounded-[48px]  ",
    };

    return (
        <button
            className={cn(
                "font-outfit font-medium text-center py-2 px-4 cursor-pointer",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
