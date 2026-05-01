"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.78 5.2 5.2 0 0 0 .1-3.72s-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0C4.9 1.62 3.7 2 3.7 2a5.2 5.2 0 0 0 .1 3.72A5.2 5.2 0 0 0 2.3 9.5c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  return (
    <section className="w-full px-4 py-8 bg-background min-h-full flex flex-col justify-between">
      <div className="w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Let’s build something great.
          </h2>
          <p className="text-base text-secondary mb-10 max-w-sm mx-auto">
            Available for freelance projects and open to full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-stretch w-full gap-4"
        >
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-background font-medium active:scale-95 transition-transform"
          >
            <Mail className="w-5 h-5" />
            Get in touch
          </a>
          
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl bg-surface border border-border text-primary font-medium active:bg-border/50 transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="text-sm">GitHub</span>
            </a>
            
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl bg-surface border border-border text-primary font-medium active:bg-border/50 transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full mt-12 pt-6 border-t border-border flex flex-col items-center text-xs text-secondary text-center">
        <p>© {new Date().getFullYear()} Sandesh Shinde.</p>
        <p className="mt-1">Designed & Built with Next.js</p>
      </div>
    </section>
  );
}
