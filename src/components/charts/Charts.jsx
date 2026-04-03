import React from 'react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = ['#00F5FF', '#7C3AED', '#FF4D9D', '#10B981'];

const customTooltipStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    borderRadius: '8px',
    color: '#fff',
    boxShadow: '0 0 15px rgba(0,245,255,0.2)'
};

const defaultLineData = [
    { name: 'Unit 1', value: 65 },
    { name: 'Unit 2', value: 72 },
    { name: 'Unit 3', value: 68 },
    { name: 'Unit 4', value: 85 },
    { name: 'Unit 5', value: 90 },
];

const defaultBarData = [
    { name: 'Quiz 1', value: 75 },
    { name: 'Quiz 2', value: 82 },
    { name: 'Midterm', value: 68 },
    { name: 'Quiz 3', value: 90 },
];

const defaultPieData = [
    { name: 'Core Concepts', value: 50 },
    { name: 'Applications', value: 30 },
    { name: 'Analytics', value: 20 },
];

export function LineChartUI({ data = defaultLineData }) {
    return (
        <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e303a" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                    <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                    <Tooltip contentStyle={customTooltipStyle} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#00F5FF"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#0F172A', stroke: '#00F5FF', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#00F5FF', stroke: '#fff', strokeWidth: 2 }}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export function BarChartUI({ data = defaultBarData }) {
    return (
        <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e303a" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                    <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                    <Tooltip contentStyle={customTooltipStyle} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                    <Legend />
                    <Bar dataKey="value" fill="#7C3AED" radius={[4, 4, 0, 0]} animationDuration={1500}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export function PieChartUI({ data = defaultPieData }) {
    return (
        <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        animationDuration={1500}
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={customTooltipStyle} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
