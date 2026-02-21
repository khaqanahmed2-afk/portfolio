import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group ${className}`}>
            {children}
        </div>
    );
};

export default Card;
