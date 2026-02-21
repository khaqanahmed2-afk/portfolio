import React from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24">
            <Container>
                <SectionHeader
                    centered
                    subtitle="Contact"
                    title="Get in Touch"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-headings font-bold text-white">Let's discuss your next system.</h3>
                            <p className="text-secondary text-lg leading-relaxed max-w-md">
                                Whether you're looking for a custom business platform or a scalable SaaS solution, I'm here to help you engineer the right system.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    <span className="text-xl">📧</span>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Email</h4>
                                    <a href="mailto:khaqanahmed2@outlook.com" className="text-white hover:text-accent-blue transition-colors">
                                        khaqanahmed2@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    <span className="text-xl">📞</span>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Phone</h4>
                                    <a href="tel:+919555954854" className="text-white hover:text-accent-blue transition-colors">
                                        +91 9555954854
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    <span className="text-xl">📱</span>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Social</h4>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/khaqanahmed2-afk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-blue transition-colors">
                                            GitHub
                                        </a>
                                        <a href="https://instagram.com/khaqanlife" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-blue transition-colors">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-secondary text-sm italic">
                                Based in India, available for long-term remote contracts and international clients.
                            </p>
                        </div>
                    </div>

                    <Card className="!p-8 md:!p-12">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-white/40">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
                                        placeholder="Khaqan Ahmad"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-white/40">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-white/40">Inquiry Type</label>
                                <select
                                    id="subject"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none"
                                >
                                    <option className="bg-background">Custom Web Application</option>
                                    <option className="bg-background">SaaS Platform Development</option>
                                    <option className="bg-background">Business Automation System</option>
                                    <option className="bg-background">Long-term Remote Contract</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-white/40">Project Summary</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"
                                    placeholder="Briefly describe your requirements..."
                                ></textarea>
                            </div>

                            <Button className="w-full py-4 text-base">Send Inquiry</Button>
                        </form>
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
