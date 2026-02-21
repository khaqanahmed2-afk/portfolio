import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

const TechStack: React.FC = () => {
    const stack = [
        {
            category: 'Frontend',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js']
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Drizzle ORM']
        },
        {
            category: 'Architecture',
            skills: ['REST APIs', 'Authentication Systems', 'RBAC', 'System Design']
        },
        {
            category: 'Deployment',
            skills: ['Cloud Hosting', 'Vercel', 'PostgreSQL', 'Git/GitHub']
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
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors group">
                            <h3 className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-6 group-hover:scale-105 transition-transform origin-left">
                                {group.category}
                            </h3>
                            <ul className="space-y-4">
                                {group.skills.map((skill, i) => (
                                    <li key={i} className="text-white font-medium flex items-center justify-between">
                                        <span>{skill}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent-blue transition-colors"></span>
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
