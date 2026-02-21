import React, { useState } from 'react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Phone, Send, CheckCircle, Github } from 'lucide-react';

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24">
            <Container>
                <SectionHeader
                    centered
                    subtitle="Inquiry"
                    title="Engineering Your Next System"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-headings font-bold text-white leading-tight">Let's discuss technical requirements.</h3>
                            <p className="text-secondary text-lg leading-relaxed max-w-md opacity-80">
                                Whether you're looking for a custom enterprise platform or a scalable SaaS solution, I'm here to help you architect the right system for your business.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/5 border border-white/5 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Email Correspondence</h4>
                                    <a href="mailto:khaqanahmed2@outlook.com" className="text-white hover:text-accent-blue transition-colors font-medium">
                                        khaqanahmed2@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/5 border border-white/5 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Direct Line</h4>
                                    <a href="tel:+919555954854" className="text-white hover:text-accent-blue transition-colors font-medium">
                                        +91 9555954854
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/5 border border-white/5 flex items-center justify-center text-accent-blue font-bold group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Source Control</h4>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/khaqanahmed2-afk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-blue transition-colors text-sm font-medium">
                                            @khaqanahmed2-afk
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-secondary text-xs italic opacity-50">
                                Based in India | Available for long-term remote contracts and international systems engineering.
                            </p>
                        </div>
                    </div>

                    <Card className="!p-8 md:!p-12 relative overflow-hidden border-white/5">
                        {!isSubmitted ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-white/30">Your Identity</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                                            placeholder="Khaqan Ahmad"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-white/30">Electronic Mail</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-white/30">System Requirements</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all appearance-none"
                                    >
                                        <option className="bg-[#111]">Custom Business ERP</option>
                                        <option className="bg-[#111]">SaaS Platform Architecture</option>
                                        <option className="bg-[#111]">Internal Automation Tool</option>
                                        <option className="bg-[#111]">Long-term Contract Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-white/30">Project Overview</label>
                                    <textarea
                                        required
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all resize-none"
                                        placeholder="Briefly describe the business logic or technical challenges..."
                                    ></textarea>
                                </div>

                                <Button
                                    className="w-full py-4 text-sm font-bold uppercase tracking-widest group"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Transmitting...'
                                    ) : (
                                        <>
                                            Initialize Inquiry
                                            <Send className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        ) : (
                            <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-8">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-headings font-bold text-white mb-4">Inquiry Received</h3>
                                <p className="text-secondary max-w-sm mx-auto leading-relaxed">
                                    Your technical requirements have been received. I will review the architecture needs and respond within 24 standard business hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-10 text-xs font-bold uppercase tracking-widest text-accent-blue hover:text-white transition-colors"
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        )}
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
