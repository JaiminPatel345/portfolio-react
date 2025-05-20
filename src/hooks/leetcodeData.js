const BASEURL = "https://alfa-leetcode-api.onrender.com";
const USERNAME = 'soldier_of_god'

// Default data to use when API fails or rate limited
const defaultProblemData = {
  solvedProblem: 152,
  easySolved: 65,
  mediumSolved: 72,
  hardSolved: 15,
  acSubmissionNum: [{ submissions: 435 }],
  totalSubmissionNum: [
    { submissions: 578 },
    { count: 98 },  // easy
    { count: 194 }, // medium
    { count: 65 }   // hard
  ]
};

const defaultContestData = {
  contestRating: 1547,
  contestAttend: 17,
  contestTopPercentage: 28.5
};

export const getProblemData = async () => {
  try {
    const response = await fetch(`${BASEURL}/${USERNAME}/solved`);
    if (!response.ok) {
      console.warn(`LeetCode problem data API returned ${response.status}, using default data`);
      return defaultProblemData;
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching LeetCode problem data:', error);
    return defaultProblemData;
  }
}

export const getContestData = async () => {
  try {
    const response = await fetch(`${BASEURL}/${USERNAME}/contest`);
    if (!response.ok) {
      console.warn(`LeetCode contest data API returned ${response.status}, using default data`);
      return defaultContestData;
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching LeetCode contest data:', error);
    return defaultContestData;
  }
}