import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
                <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">
                    {subtitle}
                </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
                <span className="block h-1 w-20 bg-accent-gradient mt-4 rounded-full mx-auto md:mx-0" style={{ margin: centered ? '1rem auto 0' : '1rem 0 0' }}></span>
            </h2>
        </div>
    );
};

export default SectionHeader;
