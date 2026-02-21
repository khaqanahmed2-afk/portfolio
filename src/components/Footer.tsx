import React from 'react';
import Container from './Container';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#080808]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-4 max-w-xs">
                        <div className="text-2xl font-headings font-bold text-white tracking-tight">
                            Khaqan<span className="text-accent-blue">Ahmad</span>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed opacity-60">
                            Engineering secure, high-performance systems and scalable digital infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-10">
                        <div className="space-y-4">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30">Navigation</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#about" className="text-xs text-secondary hover:text-accent-blue transition-colors">About</a>
                                <a href="#services" className="text-xs text-secondary hover:text-accent-blue transition-colors">Services</a>
                                <a href="#projects" className="text-xs text-secondary hover:text-accent-blue transition-colors">Projects</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30">Connect</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/khaqanahmed2-afk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-blue transition-all">
                                    <Github className="w-4 h-4" />
                                </a>
                                <a href="https://instagram.com/khaqanlife" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-blue transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="https://linkedin.com/in/khaqan-ahmad" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-blue transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="mailto:khaqanahmed2@outlook.com" className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-blue transition-all">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                        © {new Date().getFullYear()} Khaqan Ahmad. Systems Engineer.
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                        Built with React & TypeScript
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
