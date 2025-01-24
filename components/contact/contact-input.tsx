"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const ContactInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, forwardedRef) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--green-900),
            transparent 90%
          )
        `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[5px] rounded-xl transition duration-300 group/input"
      >
        <input
          ref={forwardedRef}
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-neutral-800 shadow-input rounded-xl px-3 py-2 text-sm text-neutral-200 file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);
ContactInput.displayName = "Input";

export { ContactInput };
