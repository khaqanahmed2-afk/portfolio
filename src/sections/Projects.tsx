import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects: React.FC = () => {
    const projects = [
        {
            name: 'Saket Pustak Kendra',
            type: 'Business Management Platform',
            description: 'A comprehensive full-stack business management system built for a real bookstore operation to digitize and streamline their day-to-day activities.',
            liveUrl: 'https://saketpustakkendra.in',
            overview: 'Saket Pustak Kendra required a robust digital solution to migrate from manual bookkeeping to a centralized digital system. This platform handles everything from customer interactions to complex financial ledgers.',
            problem: 'The bookstore faced challenges with manual bookkeeping, fragmented sales records, and lack of a centralized dashboard for tracking billing and outstanding payments.',
            solution: 'I developed a secure, scalable web application that integrates billing, ledger management, and data import from legacy systems like Vyapar and Tally. The system ensures data integrity and provides real-time business insights.',
            features: [
                'PIN-based mobile terminal authentication',
                'Comprehensive Customer Dashboard for personal ledger tracking',
                'Advanced Admin panel for billing and ledger management',
                'Vyapar and Tally XML/Excel data import integration',
                'WhatsApp-based enquiry system for customer support',
                'Strict Role-Based Access Control (RBAC)'
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
                    subtitle="Case Study"
                    title="Real-World Systems"
                />

                <div className="grid grid-cols-1 gap-24">
                    {projects.map((project, index) => (
                        <div key={index} className="space-y-12">
                            <Card className="!p-0 overflow-hidden flex flex-col lg:flex-row">
                                <div className="lg:w-1/3 bg-white/5 min-h-[350px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 group-hover:bg-white/[0.08] transition-colors">
                                    <div className="text-center px-8">
                                        <span className="text-6xl mb-6 block">📚</span>
                                        <p className="text-xs font-bold uppercase tracking-widest text-white/40">Production Live</p>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 p-8 md:p-12">
                                    <div className="mb-8">
                                        <p className="text-accent-blue text-sm font-bold uppercase tracking-widest mb-2">{project.type}</p>
                                        <h3 className="text-4xl font-headings font-bold text-white mb-6 font-headings">{project.name}</h3>
                                        <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-8">
                                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</Button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded text-secondary">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest font-bold text-white/60 mb-4 border-b border-white/10 pb-2">Overview</h4>
                                    <p className="text-secondary text-sm leading-relaxed">{project.overview}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest font-bold text-white/60 mb-4 border-b border-white/10 pb-2">Problem</h4>
                                    <p className="text-secondary text-sm leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest font-bold text-white/60 mb-4 border-b border-white/10 pb-2">Solution</h4>
                                    <p className="text-secondary text-sm leading-relaxed">{project.solution}</p>
                                </div>
                            </div>

                            <Card className="!p-8 bg-white/[0.01]">
                                <h4 className="text-sm uppercase tracking-widest font-bold text-white/60 mb-8 border-b border-white/10 pb-2">Key Features</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <ul className="space-y-4">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="text-secondary flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 shrink-0"></span>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-4">
                                        {project.features.slice(3).map((feature, i) => (
                                            <li key={i} className="text-secondary flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 shrink-0"></span>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
