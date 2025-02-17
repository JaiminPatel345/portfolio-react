import AchievementCard from '../components/achievementCard.jsx';

const Achievements = () => {
  const achievements = [
    {
      title: 'GeeksForGeeks Champion',
      date: '2022-24',
      icon: 'Brain',
      iconColor: '#2F8D46',
      link: 'https://www.geeksforgeeks.org/user/officialj9h58',
      btnText: 'View GFG Profile',
      description: [
        'Weekly Coding Contest 135 | 19th rank',
        'Weekly Coding Contest 129 | 53rd rank',
      ],
    }, {
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
    }, {
      title: 'Code Ramzat',
      date: 'Oct 2023',
      icon: 'Award',
      iconColor: '#0cb37c',
      link: 'https://drive.google.com/file/d/1XjM_b_F_J35P0Y43_Lsgko8gSfZVP3SW/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Secured 3rd position among all year students',
        'DSA competition on CodeChef ',
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