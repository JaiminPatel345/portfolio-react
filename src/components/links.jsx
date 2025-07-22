import {FloatingDock} from './floating-dock';
import {
  IconDeviceLaptop,
  IconFileDescription,
  IconHome,
  IconLink,
  IconUser,
} from '@tabler/icons-react';
import {ThemeToggle} from './ui/ThemeToggle';

export function Navbar() {
  const links = [
    {
      title: 'Home',
      icon: (
          <IconHome
              className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
      ),
      href: '#home',
    },
    {
      title: 'Work',
      icon: (
          <IconDeviceLaptop
              className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
      ),
      href: '#work',
    },
    {
      title: 'About',
      icon: (
          <IconUser
              className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
      ),
      href: '#about',
    },
    {
      title: 'Connect',
      icon: (
          <IconLink
              className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
      ),
      href: '#connect',
    },
    {
      title: 'Resume',
      icon: (
          <IconFileDescription
              className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
      ),
      target: '_blank',
      href: 'https://drive.google.com/file/d/19nkTVuaXvF7YW6bcV8OEx5Vj3sd1suzq/view?usp=sharing',
    },
  ];

  return (
      <div
          className="fixed top-0 left-0 right-0 z-40 px-4 py-2 pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="hidden md:block pointer-events-auto">
            <ThemeToggle/>
          </div>
          <div
              className="pointer-events-auto md:pointer-events-auto w-full md:w-auto flex justify-end">
            <FloatingDock
                desktopClassName="bg-white dark:bg-neutral-800/90 shadow-md"
                items={links}
            />
          </div>
        </div>
      </div>
  );
}
