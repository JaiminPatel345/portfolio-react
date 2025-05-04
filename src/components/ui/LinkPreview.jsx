import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {IconExternalLink} from '@tabler/icons-react';

export const LinkPreview = ({url, children}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewData, setPreviewData] = useState({
    title: '',
    description: '',
    image: '',
    isLoading: true,
    error: false
  });

  // Extract domain name for display
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch (error) {
      return url;
    }
  };

  // Get a fallback image based on the domain
  const getFallbackImage = (url) => {
    const domain = getDomain(url).toLowerCase();
    
    // Common domains fallbacks
    if (domain.includes('github.com')) {
      return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    }
    if (domain.includes('leetcode.com')) {
      return 'https://leetcode.com/static/images/LeetCode_logo_rvs.png';
    }
    if (domain.includes('codechef.com')) {
      return 'https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg';
    }
    
    // Deployment platforms
    if (domain.includes('netlify.app')) {
      return 'https://www.netlify.com/v3/img/components/logomark-dark.png';
    }
    if (domain.includes('vercel.app')) {
      return 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png';
    }
    if (domain.includes('render.com')) {
      return 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_477ea930168c6ebd7e2b13c18d9cb3f5/render.png';
    }
    
    // Project specific domains
    if (domain.includes('jaimin-detroja.tech') || url.includes('wanderlust')) {
      return 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1715815677/wanderlust-logo.png';
    }
    if (domain.includes('barter-talk')) {
      return 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1715815677/barter-talk-logo.png';
    }
    if (domain.includes('health-pie')) {
      return 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1715815677/health-pie-logo.png';
    }
    if (domain.includes('gdgc-bvm')) {
      return 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1715815677/gdgc-bvm-logo.png';
    }
    if (domain.includes('passdn.com') || domain.includes('passdn')) {
      return 'https://passdn.com/wp-content/themes/passdn/images/logo.png';
    }
    if (domain.includes('gdg.community.dev')) {
      return 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/GDG-Bevy-ChapterThumbnail.png';
    }
    
    // For generic URLs, try to construct an icon URL
    try {
      const urlObj = new URL(url);
      const iconUrl = `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
      return iconUrl;
    } catch (e) {
      // Default - return empty string to allow generic icon display
      return '';
    }
  };

  useEffect(() => {
    // Only fetch preview data when the element is hovered
    if (isHovered && previewData.isLoading) {
      // Check if we have a fallback image first
      const fallbackImage = getFallbackImage(url);
      
      // Using LinkPreview API from microlink.io (free tier)
      fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}&video=false`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success' && data.data.image?.url) {
            setPreviewData({
              title: data.data.title || getDomain(url),
              description: data.data.description || '',
              image: data.data.image.url,
              isLoading: false,
              error: false
            });
          } else {
            // Use fallback image if API doesn't return an image
            setPreviewData({
              title: data.data?.title || getDomain(url),
              description: data.data?.description || '',
              image: fallbackImage,
              isLoading: false,
              error: !fallbackImage // Only consider it an error if we don't have a fallback
            });
          }
        })
        .catch(() => {
          // On error, try to use fallback image
          setPreviewData({
            title: getDomain(url),
            description: '',
            image: fallbackImage,
            isLoading: false,
            error: !fallbackImage
          });
        });
    }
  }, [isHovered, url, previewData.isLoading]);

  return (
      <div
          className="link-preview-card relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
              <motion.div
                  initial={{opacity: 0, y: 20, scale: 0.95}}
                  animate={{opacity: 1, y: 0, scale: 1}}
                  exit={{opacity: 0, y: 20, scale: 0.95}}
                  transition={{duration: 0.2}}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
              >
                <div
                    className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg overflow-hidden w-72">
                  <div
                      className="h-36 bg-neutral-800 w-full relative overflow-hidden">
                    {previewData.isLoading ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-400"></div>
                      </div>
                    ) : previewData.image ? (
                      <img 
                        src={previewData.image} 
                        alt={previewData.title || getDomain(url)}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          // If image fails to load, try fallback again or show icon
                          const fallback = getFallbackImage(url);
                          if (fallback && e.target.src !== fallback) {
                            e.target.src = fallback;
                          } else {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            const icon = document.createElement('div');
                            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>';
                            e.target.parentElement.appendChild(icon);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <IconExternalLink size={28} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-medium text-white mb-1 truncate">
                      {previewData.isLoading ? 'Loading...' : previewData.title || getDomain(url)}
                    </div>
                    {previewData.description && (
                      <div className="text-xs text-neutral-300 line-clamp-2 mb-1">
                        {previewData.description}
                      </div>
                    )}
                    <div className="text-xs text-neutral-400 truncate">
                      {getDomain(url)}
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ab4f8] hover:text-[#afc9ff] hover:underline"
        >
          {children}
        </a>
      </div>
  );
};
