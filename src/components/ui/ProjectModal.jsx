import { IconBrandGithub, IconExternalLink, IconX } from '@tabler/icons-react';
import { MarkdownRenderer, markdownStyles } from './Markdown.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 dark:border-neutral-700">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  <IconX className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                </button>

                <div className="p-6 md:p-8">
                  {/* Project title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {project.title}
                  </h2>

                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project image */}
                    <div className="w-full lg:w-2/5">
                      <div className="rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                      
                      {/* Project time */}
                      <div className="mt-4 inline-block bg-neutral-100 dark:bg-neutral-700 px-4 py-1 rounded-full">
                        <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">
                          {project.time}
                        </span>
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="w-full lg:w-3/5">
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-6">
                        {/* Key Features */}
                        <div>
                          <h3 className="text-sm uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {project.points.map((point, i) => (
                              <li key={i} className="text-neutral-800 dark:text-neutral-200 flex items-start">
                                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                                <div className="flex-grow">
                                  <MarkdownRenderer markdown={point} />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-sm uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technology.map((tech, i) => (
                              <span
                                key={i}
                                className="inline-flex text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
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
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
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
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
                            >
                              <IconExternalLink className="w-5 h-5" />
                              <span>APK</span>
                            </a>
                          )}
                        </div>
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