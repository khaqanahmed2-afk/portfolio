import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Custom Web Applications',
            description: 'Admin dashboards, SaaS platforms, and internal business tools designed for efficiency.',
            problem: 'Inefficient workflows and fragmented data management.',
            impact: 'Streamlined operations and centralized data control.',
            advantage: 'Built with modern frameworks for maximum performance and growth.'
        },
        {
            title: 'Business Automation Systems',
            description: 'School, retail, and workflow management systems that eliminate manual overhead.',
            problem: 'High manual error rates and time-consuming repetitive tasks.',
            impact: 'Reduced operational costs and improved accuracy across departments.',
            advantage: 'Modular architecture allows for easy feature expansions.'
        },
        {
            title: 'Backend & API Development',
            description: 'Secure, scalable APIs and database architectures with role-based access control.',
            problem: 'Insecure data handling and sluggish system responses.',
            impact: 'Bank-grade security and lighting-fast data processing.',
            advantage: 'Optimized PostgreSQL and Node.js backend for high concurrency.'
        }
    ];

    return (
        <section id="services" className="py-24">
            <Container>
                <SectionHeader
                    centered
                    subtitle="Expertise"
                    title="Professional Systems Engineering"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <h3 className="text-xl font-headings font-bold mb-6 text-white group-hover:text-accent-blue transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-secondary text-sm mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-1">Problem Solved</h4>
                                    <p className="text-sm text-secondary/80">{service.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-1">Business Impact</h4>
                                    <p className="text-sm text-secondary/80">{service.impact}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-1">Scalability</h4>
                                    <p className="text-sm text-secondary/80">{service.advantage}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
