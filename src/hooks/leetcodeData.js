const BASEURL = "http://localhost:3000";
const USERNAME = 'soldier_of_god'

  export const getProblemData = async () => {
    const response = await fetch(`${BASEURL}/${USERNAME}/solved`);
    return await response.json();
  }

  export const getContestData = async () => {
    const response = await fetch(`${BASEURL}/${USERNAME}/contest`);
    return await response.json();
  }