import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function Button({ variant = 'primary', isLoading = false, className, children, ...props }) {
    const baseStyle = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

    const variants = {
        primary: "bg-electric-blue text-dark-bg hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]",
        secondary: "bg-transparent border border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]",
        neon: "bg-neon-purple text-white border border-purple-400/50 shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:shadow-[0_0_25px_rgba(124,58,237,1)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyle, variants[variant], className, isLoading && "opacity-80 cursor-not-allowed")}
            disabled={isLoading}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {isLoading ? "Running..." : children}
            </span>
            {variant === 'neon' && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-highlight/0 via-white/20 to-pink-highlight/0 -translate-x-[150%] hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0" />
            )}
        </motion.button>
    );
}
