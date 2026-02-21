import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

const Process: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Requirement Discussion',
            description: 'Understanding your business goals and defining the core technical requirements.'
        },
        {
            number: '02',
            title: 'System Planning & Architecture',
            description: 'Designing the database schema, API structure, and frontend component logic.'
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'Building the system with high-quality code and thorough quality assurance.'
        },
        {
            number: '04',
            title: 'Performance Optimization',
            description: 'Fine-tuning response times, image loads, and overall system efficiency.'
        },
        {
            number: '05',
            title: 'Deployment & Support',
            description: 'Launching to production with continuous monitoring and long-term maintenance.'
        }
    ];

    return (
        <section id="process" className="py-24 bg-white/[0.02]">
            <Container>
                <SectionHeader
                    centered
                    subtitle="Workflow"
                    title="Development Process"
                />

                <div className="relative">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-white/10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 pt-8 lg:pt-20">
                                <div className="w-12 h-12 rounded-full bg-background border-2 border-accent-blue flex items-center justify-center text-accent-blue font-bold text-lg mb-6 shadow-[0_0_20px_rgba(52,152,219,0.3)]">
                                    {step.number}
                                </div>
                                <h3 className="text-white font-headings font-bold mb-3 text-lg">{step.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Process;
