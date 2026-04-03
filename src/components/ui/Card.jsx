import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function Card({ className, children, glow = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={glow ? { scale: 1.02 } : {}}
            className={cn(
                "glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-300",
                glow && "hover:border-electric-blue/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]",
                className
            )}
        >
            {/* Subtle top gradient line common in modern dark UI */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
