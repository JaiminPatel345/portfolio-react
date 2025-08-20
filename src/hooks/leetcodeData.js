const BASEURL = "https://alfa-leetcode-api.onrender.com";
const USERNAME = 'soldier_of_god'

// Default data to use when API fails or rate limited
const defaultProblemData = {
  solvedProblem: 353,
  easySolved: 137,
  mediumSolved: 205,
  hardSolved: 11,
  acSubmissionNum: [{ submissions: 435 }],
  totalSubmissionNum: [
    { submissions: 578 },
    { count: 137 },  // easy
    { count: 213 }, // medium
    { count: 14 }   // hard
  ] 
};

const defaultContestData = {
  contestRating: 1859,
  contestAttend: 27,
  contestTopPercentage: 5.56,
};

export const getProblemData = async () => {
  try {
    const response = await fetch(`${BASEURL}/${USERNAME}/solved`);
    if (!response.ok) {
      console.log("Dear Geek ! I am handing error correctly, don't worry :) ");
      return defaultProblemData;
    }
    return await response.json();
  } catch (error) {
    console.log("Dear Geek ! I am handing error correctly, don't worry :) ");
    return defaultProblemData;
  }
}

export const getContestData = async () => {
  try {
    const response = await fetch(`${BASEURL}/${USERNAME}/contest`);
    if (!response.ok) {
      return defaultContestData;
    }
    return await response.json();
  } catch (error) {
    return defaultContestData;
  }
}