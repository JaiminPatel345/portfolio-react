/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  IconBrandCodepen,
  IconBrandLeetcode,
  IconExternalLink,
  IconStar,
  IconX,
} from '@tabler/icons-react';
import {getCodechefData} from '../hooks/codechefData.js';
import {getContestData, getProblemData} from '../hooks/leetcodeData.js';

const LeetCodeDetailModal = ({isOpen, onClose, problemData, contestData}) => {
  if (!isOpen || !problemData || !contestData) return null;

  const totalSolved = problemData.solvedProblem;
  const acceptanceRate = ((problemData.acSubmissionNum[0].submissions /
      problemData.totalSubmissionNum[0].submissions) * 100).toFixed(2);

  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      >
        <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.8, opacity: 0}}
            className="bg-gray-800 w-full max-w-4xl rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh] relative"
        >
          <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
          >
            <IconX size={24}/>
          </button>

          <div
              className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-6 sm:mb-8">
            <IconBrandLeetcode size={48}
                               className="text-orange-500 mb-4 sm:mb-0"/>
            <div className="text-center sm:text-left">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">LeetCode
                  Profile</h2>
                <a href="https://leetcode.com/u/soldier_of_god"
                   className="flex gap-3 hover:underline items-center text-xl"
                   target="_blank">
                  Show more on LeetCode
                  <IconExternalLink stroke={2}/>
                </a>
              </div>
              <p className="text-gray-400">Total Problems
                Solved: {totalSolved}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                level: 'easy',
                solved: problemData.easySolved,
                total: problemData.totalSubmissionNum[1].count,
              },
              {
                level: 'medium',
                solved: problemData.mediumSolved,
                total: problemData.totalSubmissionNum[2].count,
              },
              {
                level: 'hard',
                solved: problemData.hardSolved,
                total: problemData.totalSubmissionNum[3].count,
              },
            ].map(({level, solved, total}) => (
                <div key={level} className="bg-gray-900 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="16" fill="none"
                                stroke="#232323" strokeWidth="3"/>
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke={level === 'easy' ? '#22c55e' : level ===
                            'medium' ? '#f97316' : '#ef4444'}
                            strokeWidth="3"
                            strokeDasharray={`${(solved / total) * 100}, 100`}
                            transform="rotate(-90 18 18)"
                        />
                      </svg>
                      <div
                          className="absolute inset-0 flex flex-col justify-center items-center">
                        <span
                            className="text-xl sm:text-2xl font-bold text-white">{solved}</span>
                        <span
                            className="text-sm text-gray-400 capitalize">{level}</span>
                      </div>
                    </div>
                    <p className="text-white text-sm sm:text-base">{solved} / {total}</p>
                    <p className="text-gray-400 text-sm">{((solved / total) *
                        100).toFixed(1)}%</p>
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Acceptance
                Rate</h3>
              <p className="text-xl sm:text-2xl font-bold text-green-500">{acceptanceRate}%</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Contest
                Rating</h3>
              <p className="text-xl sm:text-2xl font-bold text-blue-500">{Math.round(
                  contestData.contestRating)}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Top
                Percentage</h3>
              <p className="text-xl sm:text-2xl font-bold text-orange-500">{contestData.contestTopPercentage}%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
};

const CodeChefDetailModal = ({isOpen, onClose, data}) => {
  if (!isOpen || !data) return null;

  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      >
        <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.8, opacity: 0}}
            className="bg-gray-800 w-full max-w-4xl rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-y-auto max-h-[90vh]"
        >
          <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
          >
            <IconX size={24}/>
          </button>

          <div
              className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-6 sm:mb-8">
            <IconBrandCodepen size={48} className="text-blue-500 mb-4 sm:mb-0"/>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">CodeChef
                Profile</h2>
              <div className="flex items-center gap-2">
                <img src={data.countryFlag} alt={data.countryName}
                     className="w-6 h-4"/>
                <span className="text-gray-400">{data.countryName}</span>
              </div>
              <a
                  href={`https://www.codechef.com/users/${data.name}`}
                  className="flex gap-3 hover:underline items-center text-xl"
                  target="_blank"
              >
                Show more on CodeChef
                <IconExternalLink stroke={2}/>
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {Array.from({length: parseInt(data.stars)}).map((_, index) => (
                  <IconStar
                      key={index}
                      size={32}
                      className="text-yellow-400"
                      fill="currentColor"
                  />
              ))}
            </div>
          </div>

          <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-900 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Current
                Rating</h3>
              <p className="text-2xl font-bold text-blue-500">{data.currentRating}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Highest
                Rating</h3>
              <p className="text-2xl font-bold text-green-500">{data.highestRating}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Global
                Ranking</h3>
              <p className="text-2xl font-bold text-purple-500">#{data.globalRank}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Rating
                Graph</h3>
              <div className="w-full h-64">
                <iframe
                    src="https://codechef-api.vercel.app/rating/jaimin_patel_3"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
};

// Main DSA Profiles Component
const DSAProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [leetcodeProblemData, setLeetcodeProblemData] = useState(null);
  const [leetcodeContestData, setLeetcodeContestData] = useState(null);
  const [codechefData, setCodechefData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [problemData, contestData, ccData] = await Promise.all([
          getProblemData(),
          getContestData(),
          getCodechefData(),
        ]);

        setLeetcodeProblemData(problemData);
        setLeetcodeContestData(contestData);
        setCodechefData(ccData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProfileClick = (profileName) => {
    if (profileName === 'LeetCode') {
      setSelectedProfile({
        name: 'LeetCode',
        type: 'leetcode',
        data: {
          problemData: leetcodeProblemData,
          contestData: leetcodeContestData,
        },
      });
    } else if (profileName === 'CodeChef') {
      setSelectedProfile({
        name: 'CodeChef',
        type: 'codechef',
        data: codechefData,
      });
    }
  };

  const profiles = [
    {
      name: 'LeetCode',
      icon: IconBrandLeetcode,
      color: 'text-orange-500',
      stats: leetcodeProblemData && leetcodeContestData ? {
        totalSolved: leetcodeProblemData.solvedProblem,
        rating: Math.round(leetcodeContestData.contestRating),
        // submissions: leetcodeProblemData.totalSubmissionNum[0]?.submissions,
        contests: leetcodeContestData.contestAttend,
        topPercentage: leetcodeContestData.contestTopPercentage,
      } : null,
    },
    {
      name: 'CodeChef',
      icon: IconBrandCodepen,
      color: 'text-blue-500',
      stats: codechefData ? {
        rating: codechefData.currentRating,
        highestRating: codechefData.highestRating,
        globalRank: codechefData.globalRank,
        countryRank: codechefData.countryRank,
        stars: codechefData.stars,
      } : null,
    },
  ];

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div
              className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
  }

  return (
      <div className="min-h-screen px-3 md:px-10 w-screen" id="profiles">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Coding Profiles
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Track my progress and achievements across different coding
            platforms.
          </p>
        </div>
        <div className="w-full flex justify-center items-center px-7 md:px-15">
          <div
              className="bg-neutral-900 p-12 md:p-24 rounded-lg shadow-2xl flex items-center justify-center relative">
            <p className="absolute top-5 left-5 text-gray-400">click to show
              details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profiles.map((profile, index) => (
                  <motion.div
                      key={profile.name}
                      onClick={() => handleProfileClick(profile.name)}
                      className="cursor-pointer"
                      initial={{opacity: 0, translateY: 20}}
                      animate={{opacity: 1, translateY: 0}}
                      transition={{delay: index * 0.2, duration: 0.5}}
                      whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                      whileTap={{scale: 0.95}}
                  >
                    <div
                        className="relative bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row gap-5 w-full items-center space-x-6 hover:bg-gray-800 transition-colors group">
                      <div className="bg-gray-700 p-4 rounded-full">
                        <profile.icon
                            className={`${profile.color} stroke-current`}
                            size={40}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {profile.name}
                        </h3>
                        {profile.stats && (
                            <div className="text-gray-400 space-y-1">
                              {profile.name === 'LeetCode' ? (
                                  <>
                                    <p>Total
                                      Solved: {profile.stats.totalSolved}</p>
                                    <p>Contest
                                      Rating: {profile.stats.rating}</p>
                                    <p>Top {profile.stats.topPercentage}%</p>
                                  </>
                              ) : (
                                  <>
                                    <p>Rating: {profile.stats.rating}</p>
                                    <p>Stars: {profile.stats.stars}</p>
                                    <p>Global Rank:
                                      #{profile.stats.globalRank}</p>
                                  </>
                              )}
                            </div>
                        )}
                      </div>
                      <div
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <IconExternalLink className="text-gray-400" size={20}/>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedProfile?.type === 'leetcode' && (
              <LeetCodeDetailModal
                  isOpen={true}
                  onClose={() => setSelectedProfile(null)}
                  problemData={selectedProfile.data.problemData}
                  contestData={selectedProfile.data.contestData}
              />
          )}
          {selectedProfile?.type === 'codechef' && (
              <CodeChefDetailModal
                  isOpen={true}
                  onClose={() => setSelectedProfile(null)}
                  data={selectedProfile.data}
              />
          )}
        </AnimatePresence>
      </div>
  );
};

export default DSAProfiles;
