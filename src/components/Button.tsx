import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    href,
    target,
    rel,
    disabled
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent-gradient text-white hover:opacity-90 shadow-lg shadow-accent-blue/20 enabled:hover:-translate-y-0.5',
        secondary: 'border border-secondary text-white hover:border-white hover:bg-white/5 enabled:hover:-translate-y-0.5',
        ghost: 'text-secondary hover:text-white hover:bg-white/5 disabled:hover:bg-transparent'
    };

    if (href && !disabled) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
