import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const About: React.FC = () => {
    const values = [
        {
            title: 'System Architecture',
            description: 'Designing robust foundations that scale with business growth and evolving requirements.'
        },
        {
            title: 'Problem Solving',
            description: 'Turning complex business challenges into intuitive, efficient digital workflows.'
        },
        {
            title: 'Clean Code',
            description: 'Writing maintainable, well-documented code that ensures long-term system stability.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-white/[0.02]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7">
                        <SectionHeader
                            subtitle="Professional Introduction"
                            title="Scalable Solutions Built with Precision"
                        />

                        <div className="space-y-6 text-secondary leading-relaxed text-lg">
                            <p>
                                Khaqan Ahmad is currently pursuing higher secondary education while actively building production-ready web applications and scalable business systems.
                            </p>
                            <p>
                                I approach development with a <span className="text-white font-medium">system architecture mindset</span>, focusing not just on writing code, but on building end-to-end solutions that solve real business problems.
                            </p>
                            <p>
                                My philosophy centers on scalability, long-term thinking, and continuous improvement. I believe in engineering systems that are as secure as they are performant.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="!p-6 border-white/5 hover:bg-white/[0.04]">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold shrink-0">
                                        0{index + 1}
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
