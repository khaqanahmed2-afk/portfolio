import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-light/5 rounded-full blur-[100px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-headings font-bold leading-tight mb-6">
                        Full-Stack Developer Building <span className="text-gradient">Scalable Business Systems</span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed font-sans max-w-2xl">
                        I design and develop secure, high-performance web applications and SaaS platforms tailored for modern businesses.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        <Button href="#projects">View Projects</Button>
                        <Button variant="secondary" href="#contact">Hire Me</Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-secondary border-l-2 border-accent-blue pl-6 py-2">
                        <p className="font-medium text-white/80">
                            Focused on clean architecture, performance, and long-term maintainability.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
