import AchievementCard from '../components/achievementCard.jsx';

const Achievements = () => {
  const achievements = [
    {
      title: 'ODOO X Mindbend Hackathon',
      date: '5-6 April 2025',
      icon: 'Code',
      iconColor: '#4CAF50',
      link: 'https://drive.google.com/file/d/1SFpUTEYaRUykIgiGRf4PgGUB4NVPcU3B/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Qualified as finalist in prestigious offline ODOO X Mindbend Hackathon at SVNIT',
        'Developed innovative solutions under time constraints',
      ],
    },
    {
      title: 'SIH 2024',
      date: 'Dec 2024',
      icon: 'Brain',
      iconColor: '#34bba9',
      link: 'https://drive.google.com/file/d/1SJkA4exajP7UOF0JQhoJ3NB4yD2tkLNP/view?usp=sharing',
      btnText: 'View Details',
      description: [
        'Shortlist name in waiting list',
        '7th out of 500 teams across India',
      ],
    },
    {
      title: 'LeetCode ',
      date: 'Sep 15, 2024',
      icon: 'Code',
      iconColor: '#FF9800',
      link: 'https://drive.google.com/file/d/1x0bW_Bsl_-ztRXMkPtTkXwH-DyF67njf/view?usp=sharing',
      btnText: 'View Details',
      description: [
        'LeetCode Weekly Contest 415',
        'Ranked 1644 out of 33,921 global participants',
      ],
    },
    {
      title: 'Byte Quest',
      date: 'Feb 2024',
      icon: 'Trophy',
      iconColor: '#FFD700',
      link: 'https://drive.google.com/file/d/1jfLeezAQl4oSY_po21j33BQT_uEHclSa/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Secured 1rd position among all year students',
        'Solved complex algorithmic challenges',
        'Recognized for optimal solution approaches',
      ],
    },
      
    {
      title: 'GeeksForGeeks',
      date: '2023',
      icon: 'Award',
      iconColor: '#e64d33',
      link: 'https://www.geeksforgeeks.org/user/officialj9h58',
      btnText: 'View GFG Profile',
      description: [
        'Weekly Coding Contest 135 | 19th rank',
        'Weekly Coding Contest 129 | 53rd rank',
      ],
    },
    {
      title: 'Code Ramzat',
      date: 'Oct 2023',
      icon: 'Crown',
      iconColor: '#a252d9',
      link: 'https://drive.google.com/file/d/1XjM_b_F_J35P0Y43_Lsgko8gSfZVP3SW/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Secured 3rd position among all year students',
        'DSA competition on CodeChef ',
      ],
    },
    {
      title: 'JEE Advanced',
      date: '2022',
      icon: 'Star',
      iconColor: '#FFC107',
      link: 'https://drive.google.com/file/d/118_UHHGKqQ_2aQP452ZRDp860UVqE_P1/view?usp=sharing',
      btnText: 'View Details',
      description: [
        'Cleared JEE Advanced 2022 with AIR 28k',
      ],
    },
  ];

  return (
      <section
          className="w-full font-sans px-3 md:px-10"
          id="achievements"
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white ">
            Achievements </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Milestones that define my growth.
          </p>
        </div>
        <div className="max-w-7xl mx-auto pb-20">
          <div className="flex flex-wrap gap-6">
            {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Achievements;