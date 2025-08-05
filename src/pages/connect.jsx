import {Mail, Phone} from 'lucide-react';
import {IconBrandGithub, IconBrandLinkedin, IconFileDescription} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const Connect = () => {
    const socialLinks = [{
        name: 'GitHub',
        icon: <IconBrandGithub className="w-8 h-8 "/>,
        url: 'https://github.com/jaiminpatel345',
    }, {
        name: 'LinkedIn',
        icon: <IconBrandLinkedin className="w-8 h-8"/>,
        url: 'https://www.linkedin.com/in/jaimindetroja345',
    }];

    const contactInfo = [{
        name: 'Email',
        icon: <Mail className="w-6 h-6"/>,
        link: 'mailto:officialjaimin345@gmail.com',
        value: 'officialjaimin345@gmail.com'
    }, {
        name: 'Phone',
        icon: <Phone className="w-6 h-6"/>,
        link: 'tel:+918511633118',
        value: '+91 8511633118'
    },
        {
            name: 'Resume',
            icon: <IconFileDescription className="w-6 h-6"/>,
            link: 'https://drive.google.com/file/d/19nkTVuaXvF7YW6bcV8OEx5Vj3sd1suzq/view?usp=drive_link',
            value: 'My Resume'
        }
    ];

    return (
        <section
            className="min-h-screen px-3 md:px-10 py-20"
            id="connect"
        >
            <div className="max-w-4xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex flex-col gap-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-3 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white max-w-4xl">
                        {"Let's Connect"}
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-lg">
                        {`I'm always open to new opportunities, collaborations, and conversations.`}
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                block p-6 rounded-xl
                                bg-white dark:bg-neutral-800 
                                border border-neutral-200 dark:border-neutral-700
                                hover:border-neutral-400 dark:hover:border-neutral-500
                                shadow-sm hover:shadow-md
                                group
                            `}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`transition-transform duration-300 text-blue-500 dark:text-blue-400 `}>
                                    {link.icon}
                                </div>
                                <span className="text-xl font-semibold text-neutral-900 dark:text-white">{link.name}</span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4"
                >
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.name}
                            className="flex items-center space-x-4 p-4 rounded-lg
                                bg-white dark:bg-neutral-800 
                                duration-300
                                border border-neutral-200 dark:border-neutral-700
                                hover:border-neutral-400 dark:hover:border-neutral-500
                                shadow-sm hover:shadow-md"
                            href={info.link}
                            target="_blank"
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="text-blue-500 dark:text-blue-400">
                                {info.icon}
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">{info.name}</p>
                                <p className="text-lg font-medium text-neutral-900 dark:text-white">{info.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Connect;