import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Zap, Brain, TrendingUp } from 'lucide-react';

export function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl space-y-8"
            >
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                    Academic <span className="text-glow-purple text-neon-purple">Intelligence</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-medium">
                    Harness the power of AI to predict student performance, analyze learning behaviors, and optimize academic success with unparalleled precision.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Link to="/input">
                        <Button variant="neon" className="px-10 py-5 text-xl">
                            Start Evaluation <Zap className="w-6 h-6 ml-2" />
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="secondary" className="px-10 py-5 text-xl">
                            Prediction Engine
                        </Button>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="grid md:grid-cols-3 gap-8 w-full pt-12"
            >
                <Card glow className="text-left">
                    <Brain className="w-12 h-12 text-electric-blue mb-6 border border-electric-blue/30 p-2 rounded-xl bg-electric-blue/10" />
                    <h3 className="text-2xl font-bold mb-3">Hybrid ML Models</h3>
                    <p className="text-base text-gray-400">Combining quantitative academic scores with behavioral data to predict SGPA trajectories accurately.</p>
                </Card>
                <Card glow className="text-left">
                    <Zap className="w-12 h-12 text-neon-purple mb-6 border border-purple-400/30 p-2 rounded-xl bg-neon-purple/10" />
                    <h3 className="text-2xl font-bold mb-3">Early Risk Engine</h3>
                    <p className="text-base text-gray-400">Instantly evaluates failure probabilities and classifies students into high, medium, and low risk zones.</p>
                </Card>
                <Card glow className="text-left">
                    <TrendingUp className="w-12 h-12 text-pink-highlight mb-6 border border-pink-400/30 p-2 rounded-xl bg-pink-highlight/10" />
                    <h3 className="text-2xl font-bold mb-3">Actionable Insights</h3>
                    <p className="text-base text-gray-400">Turning raw assignment and attendance data into personalized subject-wise improvement recommendations.</p>
                </Card>
            </motion.div>
        </div>
    );
}
