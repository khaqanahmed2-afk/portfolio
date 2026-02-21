import React, { useState, useEffect } from 'react';
import Container from './Container';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
                }`}
        >
            <Container className="flex items-center justify-between">
                <a href="#" className="text-xl font-headings font-bold flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center text-white text-sm">KS</span>
                    <span>Khaqan's Systems</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-accent-gradient text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Trigger (Simplified) */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </Container>
        </nav>
    );
};

export default Navbar;
