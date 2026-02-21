import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Code2, Database, Target } from 'lucide-react';

const About: React.FC = () => {
    const values = [
        {
            title: 'System Architecture',
            icon: <Database className="w-5 h-5" />,
            description: 'I design robust foundations that scale with business growth and evolving requirements.'
        },
        {
            title: 'Problem Solving',
            icon: <Target className="w-5 h-5" />,
            description: 'I turn complex business challenges into intuitive, efficient digital workflows.'
        },
        {
            title: 'Clean Code',
            icon: <Code2 className="w-5 h-5" />,
            description: 'I write maintainable, well-documented code that ensures long-term system stability.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-white/[0.02]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7">
                        <SectionHeader
                            subtitle="Professional Philosophy"
                            title="Scalable Solutions Built with Precision"
                        />

                        <div className="space-y-6 text-secondary leading-relaxed text-lg">
                            <p>
                                I am <span className="text-white font-medium">Khaqan Ahmad</span>, a systems-focused developer dedicated to building production-ready applications that solve real-world problems.
                            </p>
                            <p>
                                I approach every project with a <span className="text-white font-medium">system architecture mindset</span>. For me, development isn't just about writing code; it's about engineering end-to-end solutions that are secure, performant, and maintainable.
                            </p>
                            <p>
                                My philosophy centers on long-term thinking. I believe in building systems that don't just work for today, but provide a solid foundation for future growth and technological evolution.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="!p-6 border-white/5 hover:bg-white/[0.04] group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-headings font-bold mb-2">{value.title}</h3>
                                        <p className="text-secondary text-sm">{value.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
