import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Brain, BarChart3, Zap, Target, BookOpen, Search, ArrowRight, Database } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 py-12">
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-black text-glow-blue flex items-center justify-center gap-4">
                    <Brain className="w-12 h-12 text-electric-blue" />
                    AI Prediction Engine
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                    Deep dive into the intelligence powering student performance insights.
                </p>
            </motion.div>

            <div className="space-y-10">
                {/* Hybrid Model */}
                <Card glow className="relative overflow-hidden border-neon-purple/50">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] -mr-20 -mt-20" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <BarChart3 className="w-8 h-8 text-electric-blue" />
                            <h2 className="text-3xl font-bold text-glow-purple">Hybrid Quant + AI Model</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed max-w-3xl mb-6 text-lg">
                            Our system combines quantitative scoring techniques with lightweight machine learning logic to predict student performance and failure risk. Unlike traditional grade trackers, this model evaluates:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Academic performance (internals, assignments, labs)",
                                "Learning behavior (study hours, consistency)",
                                "Conceptual understanding",
                                "Practice intensity"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-dark-bg/50 p-3 rounded-lg border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Smart Evaluation System */}
                    <Card glow className="border-electric-blue/30">
                        <div className="flex items-center gap-4 mb-6">
                            <Zap className="w-8 h-8 text-electric-blue" />
                            <h3 className="text-2xl font-bold">Smart Evaluation System</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Processes multiple academic indicators simultaneously",
                                "Assigns dynamic weights to different performance factors",
                                "Generates real-time risk classification",
                                "Produces subject-wise SGPA predictions"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400 items-start">
                                    <ArrowRight className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Risk Prediction Engine */}
                    <Card glow className="border-pink-highlight/30">
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="w-8 h-8 text-pink-highlight" />
                            <h3 className="text-2xl font-bold">Risk Prediction Engine</h3>
                        </div>
                        <p className="text-gray-400 mb-6">A multi-factor scoring model classifies students into four critical zones:</p>
                        <div className="space-y-3">
                            {[
                                { label: "High Risk", color: "bg-red-500/20 text-red-500 border-red-500/50" },
                                { label: "Medium High Risk", color: "bg-orange-500/20 text-orange-400 border-orange-500/50" },
                                { label: "Medium Risk", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" },
                                { label: "Low Risk", color: "bg-green-500/20 text-green-400 border-green-500/50" }
                            ].map((risk, i) => (
                                <div key={i} className={`flex justify-between items-center px-4 py-3 rounded-xl border ${risk.color}`}>
                                    <span className="font-bold flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${risk.color.split(' ')[0].replace('/20', '')}`} />
                                        {risk.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Subject Intelligence & Interpretability */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card glow className="border-neon-purple/30">
                        <div className="flex items-center gap-4 mb-6">
                            <BookOpen className="w-8 h-8 text-neon-purple" />
                            <h3 className="text-2xl font-bold">Subject-wise Intelligence</h3>
                        </div>
                        <p className="text-gray-400 mb-6">Each subject uses customized evaluation logic tailored to its domain:</p>
                        <div className="space-y-4">
                            {[
                                { subject: "Data Structures", style: "problem-solving & practice heavy" },
                                { subject: "Engineering Math", style: "concept clarity & consistency" },
                                { subject: "Physics", style: "conceptual + application-based" },
                                { subject: "Electronics", style: "theory + lab performance" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col bg-dark-bg/60 p-4 rounded-xl border border-neon-purple/20">
                                    <span className="font-bold text-white text-lg">{item.subject}</span>
                                    <span className="text-sm text-neon-purple mt-1 flex items-center gap-2">
                                        <Zap className="w-3 h-3" /> {item.style}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card glow className="border-electric-blue/30 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <Search className="w-8 h-8 text-electric-blue" />
                                <h3 className="text-2xl font-bold">Interpretability <span className="text-xs bg-pink-highlight/20 text-pink-highlight px-2 py-1 rounded ml-2">GOLD STD</span></h3>
                            </div>
                            <p className="text-gray-400 mb-6">The system doesn't just predict; it provides explainable AI insights:</p>
                            <ul className="space-y-5">
                                {[
                                    "Feature importance insights",
                                    "Personalized improvement suggestions",
                                    "“What-if” scenario analysis"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center bg-dark-bg/60 p-4 rounded-xl border border-white/5 shadow-lg">
                                        <div className="bg-electric-blue/20 p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-electric-blue" />
                                        </div>
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </div>

                {/* Pipeline Animation */}
                <Card glow className="border-white/20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Database className="w-8 h-8 text-gray-400" />
                        <h3 className="text-2xl font-bold">Data Pipeline</h3>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 font-mono text-sm md:text-base">
                        {[
                            { label: "User Input", color: "text-gray-300" },
                            { label: "Quant Model", color: "text-electric-blue" },
                            { label: "Risk Engine", color: "text-pink-highlight" },
                            { label: "SGPA Prediction", color: "text-neon-purple" },
                            { label: "Dashboard Visualization", color: "text-green-400" }
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className={`bg-dark-bg border border-white/10 px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.05)] ${step.color} font-bold`}>
                                    {step.label}
                                </div>
                                {index < arr.length - 1 && (
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <ArrowRight className="w-6 h-6 text-gray-500" />
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </Card>

            </div>
        </div>
    );
}
