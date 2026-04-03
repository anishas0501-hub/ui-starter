import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <motion.div className="relative w-full" whileTap={{ scale: 0.995 }}>
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-xl border border-electric-blue/30 bg-dark-bg/50 px-4 py-2 text-sm text-white transition-all duration-300",
                    "placeholder:text-gray-400 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:shadow-[0_0_15px_rgba(0,245,255,0.4)]",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        </motion.div>
    );
});
Input.displayName = "Input";
