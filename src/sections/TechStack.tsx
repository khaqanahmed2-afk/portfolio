import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { Server, Cpu, Cloud, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
    const stack = [
        {
            category: 'Frontend',
            icon: <Globe className="w-4 h-4" />,
            skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js']
        },
        {
            category: 'Backend',
            icon: <Server className="w-4 h-4" />,
            skills: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Drizzle ORM']
        },
        {
            category: 'Architecture',
            icon: <Cpu className="w-4 h-4" />,
            skills: ['REST APIs', 'Auth Systems', 'RBAC', 'System Design']
        },
        {
            category: 'Deployment',
            icon: <Cloud className="w-4 h-4" />,
            skills: ['Cloud Hosting', 'Vercel', 'Render', 'CI/CD Basics']
        }
    ];

    return (
        <section id="tech" className="py-24">
            <Container>
                <SectionHeader
                    centered
                    subtitle="Technical Expertise"
                    title="The Systems Tech Stack"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((group, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-accent-blue opacity-70 group-hover:opacity-100 transition-opacity">
                                    {group.icon}
                                </div>
                                <h3 className="text-accent-blue font-bold uppercase tracking-widest text-xs group-hover:translate-x-1 transition-transform">
                                    {group.category}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {group.skills.map((skill, i) => (
                                    <li key={i} className="text-white font-medium flex items-center justify-between group/item">
                                        <span className="text-sm opacity-80 group-hover/item:opacity-100 transition-opacity">{skill}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-accent-blue transition-colors"></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TechStack;
