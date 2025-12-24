import { useEffect, useState } from 'react';
import { IconBrandGithub, IconExternalLink, IconX, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { MarkdownRenderer } from './Markdown.jsx'; // Removed markdownStyles import as we might not need it explicitly if unused or we can keep it
import { motion, AnimatePresence } from 'framer-motion';
import './modal-scrollbar.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [isKeyPointsOpen, setIsKeyPointsOpen] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsKeyPointsOpen(true); // Reset state when opening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-all border border-white/10"
              >
                <IconX className="w-5 h-5" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto modal-scrollbar flex-1 pb-6">
                {/* Image Header */}
                <div className="relative w-full bg-neutral-900 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                  />
                  {/* Stronger gradient for better text visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 pt-12">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide text-white uppercase bg-blue-600 rounded-full shadow-lg">
                          {project.time}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white shadow-md leading-tight drop-shadow-md">
                        {project.title}
                      </h2>
                    </motion.div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="px-6 md:px-8 mt-6">

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#24292e] text-white font-bold hover:bg-[#2b3137] transition-all active:scale-95 shadow-md dark:border dark:border-neutral-700"
                      >
                        <IconBrandGithub className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                      >
                        <IconExternalLink className="w-5 h-5" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-500/20"
                      >
                        <IconExternalLink className="w-5 h-5" />
                        <span>Download APK</span>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-col gap-8">
                    {/* Description */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Collapsible Key Features */}
                    <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/30">
                      <button
                        onClick={() => setIsKeyPointsOpen(!isKeyPointsOpen)}
                        className="w-full flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 uppercase tracking-wider">
                          Key Highlights
                        </h3>
                        {isKeyPointsOpen ? (
                          <IconChevronUp className="w-5 h-5 text-neutral-500" />
                        ) : (
                          <IconChevronDown className="w-5 h-5 text-neutral-500" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isKeyPointsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="grid gap-3 p-4">
                              {project.points.map((point, i) => (
                                <li key={i} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                  <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500 dark:bg-blue-400" />
                                  <span>
                                    <MarkdownRenderer markdown={point} />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tech Stack (Smaller) */}
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technology.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 