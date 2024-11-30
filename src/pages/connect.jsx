import { Mail, Phone }                        from 'lucide-react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Connect = () => {
    const socialLinks = [{
        name: 'GitHub',
        icon: <IconBrandGithub className = "w-8 h-8 "/>,
        url: 'https://github.com/jaiminpatel345',
    }, {
        name: 'LinkedIn',
        icon: <IconBrandLinkedin className = "w-8 h-8"/>,
        url: 'https://www.linkedin.com/in/jaimindetroja345',
    }];

    const contactInfo = [{
        name: 'Email',
        icon: <Mail className = "w-6 h-6"/>,
        link: 'mailto:officialjaimin345@gmail.com',
        value: 'officialjaimin345@gmail.com'
    }, {
        name: 'Phone',
        icon: <Phone className = "w-6 h-6"/>,
        link: 'tel:+918511633118',
        value: '+91 8511633118'
    }];

    return (
        <section
            className = "min-h-screen px-3 md:px-10"
            id = "connect"
        >
            <div className = "max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex flex-col gap-10">
                <div className = "mb-3 md:mb-12">
                    <h2 className = "text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                        {"Let's Connect"}
                    </h2>

                </div>

                {/* Social Links */}
                <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {socialLinks.map( ( link ) => (
                        <a
                            key = {link.name}
                            href = {link.url}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = {`
                block p-6 rounded-xl
                bg-gray-800 backdrop-blur-sm
                transform transition-all duration-300
                hover:scale-105 
                border border-gray-700
                hover:border-gray-500
                group
              `}
                        >
                            <div className = "flex items-center space-x-4">
                                <div className = {`transition-transform duration-300 text-white`}>
                                    {link.icon}
                                </div>
                                <span className = "text-xl font-semibold">{link.name}</span>
                            </div>
                        </a>
                    ) )}
                </div>

                {/* Contact Information */}
                <div className = "space-y-6">
                    {contactInfo.map( ( info ) => (
                        <a
                            key = {info.name}
                            className = "flex items-center space-x-4 p-4 rounded-lg
                         bg-gray-800/50 backdrop-blur-sm
                         transform transition-all duration-300
                         hover:translate-x-2"
                            href = {info.link}
                        >
                            <div className = "text-blue-400">
                                {info.icon}
                            </div>
                            <div>
                                <p className = "text-sm text-gray-400">{info.name}</p>
                                <p className = "text-lg font-medium">{info.value}</p>
                            </div>
                        </a>
                    ) )}
                </div>
            </div>
        </section>
    );
};

export default Connect;