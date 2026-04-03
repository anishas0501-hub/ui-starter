import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Database, UploadCloud } from 'lucide-react';

export function InputPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto min-h-[70vh] flex flex-col justify-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4">Input Data Parameters</h1>
                    <p className="text-gray-400">Enter the student credentials, semester range, and evaluation model to begin backend analysis.</p>
                </div>

                <Card glow>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Student ID / Cohort</label>
                                <Input type="text" placeholder="Enter Roll Number..." required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Semester Start</label>
                                    <Input type="text" placeholder="e.g. Sem 1" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Semester End</label>
                                    <Input type="text" placeholder="e.g. Sem 4" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Evaluation Model</label>
                                <select className="flex h-12 w-full rounded-xl border border-electric-blue/30 bg-dark-bg/50 px-4 py-2 text-sm text-white focus:outline-none focus:border-electric-blue appearance-none">
                                    <option>Hybrid Risk Classification Engine</option>
                                    <option>Subject-wise Predictive Scorer</option>
                                    <option>Behavioral Progression Analyzer</option>
                                </select>
                            </div>

                            {/* Fake upload area */}
                            <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-electric-blue hover:bg-electric-blue/5 transition-colors cursor-pointer group">
                                <UploadCloud className="w-10 h-10 mx-auto text-gray-400 group-hover:text-electric-blue mb-2 transition-colors" />
                                <p className="text-sm text-gray-400">Or drop your batch CSV dataset here (Moodle/Canvas export)</p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="neon"
                            className="w-full py-4 text-lg mt-4"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Database className="w-5 h-5" /> Run Engine Simulation
                                </span>
                            )}
                        </Button>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
}
