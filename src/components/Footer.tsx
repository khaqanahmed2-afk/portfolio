import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/5 mt-12 bg-black/20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl font-headings font-bold text-white">Khaqan Ahmad</h4>
                        <p className="text-secondary text-sm">Engineering scalable digital solutions.</p>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-accent-blue/60 mt-2">
                            KhaqanLife
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#about" className="text-sm text-secondary hover:text-white transition-colors">About</a>
                        <a href="#services" className="text-sm text-secondary hover:text-white transition-colors">Services</a>
                        <a href="#projects" className="text-sm text-secondary hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-sm text-secondary hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/khaqanahmed2-afk" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <span className="text-xs uppercase font-bold tracking-widest">GitHub</span>
                        </a>
                        <a href="https://instagram.com/khaqanlife" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <span className="text-xs uppercase font-bold tracking-widest">Instagram</span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.02] text-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                    © {new Date().getFullYear()} Khaqan Ahmad. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
