import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { LineChartUI, BarChartUI, PieChartUI } from '../components/charts/Charts';
import { TrendingUp, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';

export function OutputDashboard() {
    const lineData = [
        { name: 'Sem 1', value: 7.2 },
        { name: 'Sem 2', value: 7.8 },
        { name: 'Sem 3', value: 6.9 },
        { name: 'Sem 4', value: 8.1 },
        { name: 'Sem 5', value: 8.5 },
        { name: 'Sem 6 (Proj)', value: 8.8 },
    ];

    const barData = [
        { name: 'Assignments', value: 85 },
        { name: 'Lab Work', value: 92 },
        { name: 'Midterms', value: 70 },
        { name: 'Attendance', value: 88 },
    ];

    const pieData = [
        { name: 'Conceptual', value: 45 },
        { name: 'Practical', value: 35 },
        { name: 'Theoretical', value: 20 },
    ];

    return (
        <div className="space-y-8 py-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Student Inference Results</h1>
                    <p className="text-gray-400">Analysis completed for ID: CS-2024-089 using Risk Classification Engine.</p>
                </div>
                <div className="flex gap-4">
                    <span className="flex items-center gap-2 text-sm bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
                        <AlertTriangle className="w-4 h-4" /> Medium Risk
                    </span>
                </div>
            </motion.div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Predicted SGPA', value: '8.4', icon: TrendingUp, color: 'text-electric-blue' },
                    { label: 'Study Consistency', value: '78%', icon: Activity, color: 'text-neon-purple' },
                    { label: 'Risk Score', value: '42/100', icon: AlertTriangle, color: 'text-pink-highlight' },
                    { label: 'Concept Mastery', value: 'High', icon: ShieldCheck, color: 'text-green-400' },
                ].map((kpi, i) => (
                    <motion.div key={kpi.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card glow className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm text-gray-400 font-medium">{kpi.label}</p>
                                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                            </div>
                            <p className="text-3xl font-bold">{kpi.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card glow className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-4">Predicted Performance Trajectory</h3>
                    <p className="text-sm text-gray-400 mb-6">Historical SGPA and predicted outcome for upcoming semester.</p>
                    <LineChartUI data={lineData} />
                </Card>

                <Card glow className="lg:col-span-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-4">Learning Profile</h3>
                    <p className="text-sm text-gray-400 mb-6">Distribution of student's demonstrated strengths.</p>
                    <div className="flex-grow flex items-center justify-center">
                        <PieChartUI data={pieData} />
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card glow>
                    <h3 className="text-xl font-bold mb-4">Feature Importance</h3>
                    <p className="text-sm text-gray-400 mb-6">Key metrics heavily influencing the current risk prediction.</p>
                    <BarChartUI data={barData} />
                </Card>

                <Card glow>
                    <h3 className="text-xl font-bold mb-6">AI Improvement Suggestions</h3>
                    <div className="space-y-4">
                        {[
                            { type: 'URGENT', asset: 'Data Structures Assignments', target: 'Low submission rate detected.', time: 'Current week', color: 'text-pink-highlight' },
                            { type: 'FOCUS', asset: 'Engineering Math Concepts', target: 'Inconsistent quiz scores.', time: 'Last 2 weeks', color: 'text-yellow-400' },
                            { type: 'GOOD', asset: 'Physics Lab Performance', target: 'Consistently high remarks.', time: 'All semester', color: 'text-green-400' },
                        ].map((signal, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-dark-bg/50 border border-electric-blue/20">
                                <div className="flex items-center gap-4">
                                    <span className={`font-bold text-sm ${signal.color}`}>{signal.type}</span>
                                    <div>
                                        <p className="font-medium text-sm">{signal.asset}</p>
                                        <p className="text-xs text-gray-400">{signal.target}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">{signal.time}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
