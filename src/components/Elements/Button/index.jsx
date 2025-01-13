import React from "react"

const Button = ({children, variant, type}) => {
    const getVariant = () => {
        // Untuk tombol primary outline dengan hover effect
        if (variant?.includes("border-primary")) {
            return `${variant} hover:bg-primary hover:text-white transition-colors duration-300`;
        }
        return variant;
    };

    return (
        <button
            className={`h-12 rounded-md text-sm ${getVariant()}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button