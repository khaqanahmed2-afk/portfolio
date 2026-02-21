import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Layout, Cpu, Server } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Custom Web Applications',
            icon: <Layout className="w-6 h-6" />,
            description: 'Scalable admin dashboards, internal business tools, and SaaS platforms engineered for operational excellence.',
            problem: 'Fragmented data and inefficient manual workflows.',
            impact: 'Centralized control and streamlined digital operations.',
            advantage: 'Optimized for high concurrency and long-term scaling.'
        },
        {
            title: 'Business Automation',
            icon: <Cpu className="w-6 h-6" />,
            description: 'Intelligent automation systems that eliminate repetitive tasks and minimize human error across your business.',
            problem: 'High manual overhead and prone to operational errors.',
            impact: 'Significant cost reduction and 100% process accuracy.',
            advantage: 'Modular architecture for seamless feature expansion.'
        },
        {
            title: 'System Architecture',
            icon: <Server className="w-6 h-6" />,
            description: 'Robust backend development, API design, and database optimization with a focus on security and reliability.',
            problem: 'Insecure data handling and sluggish system responses.',
            impact: 'Bank-grade security and sub-second data processing.',
            advantage: 'RBAC-first design and highly optimized PostgreSQL.'
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
                        <Card key={index} className="flex flex-col h-full group">
                            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-headings font-bold mb-6 text-white transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-secondary text-sm mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Target Problem</h4>
                                    <p className="text-sm text-secondary/80">{service.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Business Impact</h4>
                                    <p className="text-sm text-secondary/80">{service.impact}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Engineering Advantage</h4>
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
