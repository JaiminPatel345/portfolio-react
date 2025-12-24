import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ZoomIn,
    ZoomOut,
    Download,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    Minimize2,
    FileText,
    ExternalLink
} from 'lucide-react';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const RESUME_PDF = '/assets/resume/Jaimin Detroja.pdf';

export const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    const onDocumentLoadSuccess = useCallback(({ numPages }) => {
        setNumPages(numPages);
        setIsLoading(false);
        setLoadError(false);
    }, []);

    const onDocumentLoadError = useCallback((error) => {
        console.error('Error loading PDF:', error);
        setIsLoading(false);
        setLoadError(true);
    }, []);

    const changePage = (offset) => {
        setPageNumber(prevPage => Math.min(Math.max(1, prevPage + offset), numPages || 1));
    };

    const handleZoom = (delta) => {
        setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.5));
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        if (!isFullscreen) {
            setScale(1.2);
        } else {
            setScale(1.0);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = RESUME_PDF;
        link.download = 'Jaimin_Detroja_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div
            className="w-full font-sans px-2 md:px-10 dark:from-neutral-900 dark:via-neutral-800/50 dark:to-neutral-900 transition-colors duration-300"
            id="resume"
        >
            <div className="max-w-7xl mx-auto py-16 px-2 md:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 text-neutral-900 dark:text-white">
                        Resume
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-8">
                        My professional summary at a glance
                    </p>
                </motion.div>

                {/* PDF Viewer Container */}
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-lg p-4 md:p-8 flex flex-col' : ''}`}
                    >
                        {/* Toolbar */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className={`flex flex-wrap items-center justify-between gap-3 p-3 md:p-4 rounded-t-xl border border-b-0 
                ${isFullscreen
                                    ? 'bg-neutral-800 border-neutral-700'
                                    : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
                                } shadow-lg`}
                        >
                            {/* Left: Page Navigation */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => changePage(-1)}
                                    disabled={pageNumber <= 1}
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 
                    disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 
                    text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 min-w-[80px] text-center">
                                    {numPages ? `${pageNumber} / ${numPages}` : '...'}
                                </span>

                                <button
                                    onClick={() => changePage(1)}
                                    disabled={pageNumber >= (numPages || 1)}
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 
                    disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200
                    text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400"
                                    aria-label="Next page"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Center: Zoom Controls */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleZoom(-0.2)}
                                    disabled={scale <= 0.5}
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 
                    disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200
                    text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400"
                                    aria-label="Zoom out"
                                >
                                    <ZoomOut className="w-5 h-5" />
                                </button>

                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 min-w-[50px] text-center">
                                    {Math.round(scale * 100)}%
                                </span>

                                <button
                                    onClick={() => handleZoom(0.2)}
                                    disabled={scale >= 2.5}
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 
                    disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200
                    text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400"
                                    aria-label="Zoom in"
                                >
                                    <ZoomIn className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 
                    transition-all duration-200 text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400"
                                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                                >
                                    {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                                </button>

                                <button
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm
                                        bg-blue-600 hover:bg-blue-700
                                        text-white
                                        shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="hidden sm:inline">Download</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* PDF Viewer */}
                        <div
                            className={`relative overflow-x-auto overflow-y-auto rounded-b-xl border border-t-0
                                ${isFullscreen
                                    ? 'flex-1 bg-neutral-800/50 border-neutral-700'
                                    : 'bg-neutral-100 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700 max-h-[70vh]'
                                } shadow-xl`}
                        >
                            {/* Loading State */}
                            {isLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800 z-10">
                                    <div className="relative">
                                        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-900 rounded-full animate-spin border-t-blue-500 dark:border-t-blue-400"></div>
                                        <FileText className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-500 dark:text-blue-400" />
                                    </div>
                                    <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm">Loading resume...</p>
                                </div>
                            )}

                            {/* Error State */}
                            {loadError && (
                                <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                                    <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                                        <FileText className="w-8 h-8 text-red-500 dark:text-red-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                        Unable to load resume
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
                                        The PDF viewer encountered an issue. You can still download the resume directly.
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <button
                                            onClick={handleDownload}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                                                bg-blue-600 hover:bg-blue-700
                                                text-white
                                                shadow-sm hover:shadow-md transition-all duration-200"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download Resume
                                        </button>
                                        <a
                                            href={RESUME_PDF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                        bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600
                        text-neutral-700 dark:text-neutral-200 transition-all duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Open in new tab
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* PDF Document */}
                            <div className="flex justify-center p-2 md:p-6 min-w-fit">
                                <Document
                                    file={RESUME_PDF}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    loading={null}
                                    className="flex justify-center"
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        scale={scale}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        className="shadow-2xl rounded-lg overflow-hidden"
                                        loading={null}
                                        width={typeof window !== 'undefined' && window.innerWidth < 640 ? window.innerWidth - 40 : undefined}
                                    />
                                </Document>
                            </div>
                        </div>

                        {/* Quick Actions Footer */}
                        {!isFullscreen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mt-6 flex flex-wrap items-center justify-center gap-4"
                            >
                                <a
                                    href={RESUME_PDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                                        border border-neutral-300 dark:border-neutral-600 
                                        bg-white dark:bg-neutral-800 
                                        hover:border-blue-400 dark:hover:border-blue-500
                                        text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400
                                        transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Open in new tab
                                </a>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Resume;
