import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { ExternalLink, Code2, Database, ShieldCheck, Target } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            name: 'Saket Pustak Kendra',
            type: 'ERP & Business Management',
            description: 'A comprehensive full-stack ERP system built for a high-volume bookstore to digitize inventory, sales, and complex financial accounting.',
            liveUrl: 'https://saketpustakkendra.in',
            overview: 'Saket Pustak Kendra required a robust digital infrastructure to migrate from manual bookkeeping to an automated, centralized system capable of handling thousands of transactions.',
            problem: 'The bookstore struggled with manual ledger errors, fragmented purchase records, and a lack of real-time visibility into outstanding payments and stock levels.',
            solution: 'I engineered a secure, scalable web application featuring deep integration with legacy Vyapar/Tally data, automated ledger balancing, and an intuitive admin control center.',
            features: [
                'Automated Vyapar/Tally XML & Excel Data Parsing',
                'Mobile-first Terminal with secure PIN Authentication',
                'Dynamic Customer Ledgers with real-time balance tracking',
                'Strict Role-Based Access Control (RBAC) Architecture',
                'Automated PDF Invoice Generation & Records',
                'WhatsApp-integrated Customer Support System'
            ],
            stack: [
                'React 18',
                'Vite',
                'TypeScript',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'PostgreSQL',
                'Supabase',
                'Drizzle ORM'
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white/[0.02]">
            <Container>
                <SectionHeader
                    subtitle="Selected Case Study"
                    title="Real-World Systems"
                />

                <div className="grid grid-cols-1 gap-24">
                    {projects.map((project, index) => (
                        <div key={index} className="space-y-12">
                            <Card className="!p-0 overflow-hidden flex flex-col lg:flex-row group border-white/5">
                                <div className="lg:w-1/3 bg-white/5 min-h-[350px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 group-hover:bg-white/[0.08] transition-all duration-500">
                                    <div className="text-center px-8 flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform">
                                            <Database className="w-10 h-10" />
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">Production Live</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-8">
                                        <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.2em] mb-3">{project.type}</p>
                                        <h3 className="text-4xl md:text-5xl font-headings font-bold text-white mb-6 leading-tight">{project.name}</h3>
                                        <p className="text-secondary text-lg leading-relaxed max-w-2xl opacity-80">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-10">
                                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group">
                                            Launch System
                                            <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded text-secondary/60 hover:text-accent-blue hover:border-accent-blue/30 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white mb-4 border-b border-white/10 pb-4">
                                        <Code2 className="w-4 h-4 text-accent-blue" />
                                        The Challenge
                                    </h4>
                                    <p className="text-secondary text-sm leading-relaxed opacity-70">{project.problem}</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white mb-4 border-b border-white/10 pb-4">
                                        <ShieldCheck className="w-4 h-4 text-accent-blue" />
                                        The Solution
                                    </h4>
                                    <p className="text-secondary text-sm leading-relaxed opacity-70">{project.solution}</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white mb-4 border-b border-white/10 pb-4">
                                        <Target className="w-4 h-4 text-accent-blue" />
                                        Impact
                                    </h4>
                                    <p className="text-secondary text-sm leading-relaxed opacity-70">
                                        Transformed a fragmented manual operation into a data-driven enterprise, reducing reporting time by 90% and eliminating record-keeping discrepancies.
                                    </p>
                                </div>
                            </div>

                            <Card className="!p-10 bg-white/[0.01] border-white/5">
                                <h4 className="text-sm uppercase tracking-widest font-bold text-white/40 mb-10 text-center">Engineered Features</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 group/feat">
                                            <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2.5 shrink-0 group-hover/feat:scale-150 transition-transform"></div>
                                            <span className="text-sm text-secondary group-hover/feat:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    ))}

                    {/* Placeholder for future projects */}
                    <div className="py-20 border-t border-white/5 text-center">
                        <p className="text-white/20 text-sm font-bold uppercase tracking-[0.3em]">More projects in engineering phase</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Projects;
