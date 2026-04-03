import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Activity } from 'lucide-react';

export function Navbar() {
    const location = useLocation();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Input Data', path: '/input' },
        { name: 'Prediction Engine', path: '/about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-electric-blue/20 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
                    <Activity className="text-electric-blue group-hover:text-neon-purple transition-colors duration-300" />
                    <span className="text-glow-blue tracking-wider">STUDENT<span className="text-pink-highlight">.AI</span></span>
                </Link>
                <div className="flex gap-6">
                    {links.map(link => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "relative px-3 py-1 text-sm font-medium transition-colors hover:text-white",
                                    isActive ? "text-white" : "text-gray-400"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-electric-blue/10 border-b-2 border-electric-blue rounded-t"
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}
