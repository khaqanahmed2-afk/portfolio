import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-accent-light/5 rounded-full blur-[120px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Available for premium projects</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-headings font-bold leading-tight mb-8">
                        Engineering Secure <br />
                        <span className="text-gradient">Business Systems</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-secondary mb-12 leading-relaxed font-sans max-w-3xl">
                        I specialize in building high-performance web applications and scalable SaaS platforms that solve complex technical challenges with clean, modular architecture.
                    </p>

                    <div className="flex flex-wrap gap-6 mb-20">
                        <Button href="#projects" className="group">
                            View Case Study
                            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="secondary" href="#contact">Discuss a Project</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-white/5">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent-blue">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Secure by Default</h4>
                                <p className="text-secondary text-xs leading-relaxed">Implementing bank-grade authentication and strict RBAC architectures.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent-blue">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">High Performance</h4>
                                <p className="text-secondary text-xs leading-relaxed">Optimized backends and lightning-fast frontends for heavy operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
