const BASEURL = "https://codechef-api.vercel.app";
const USERNAME = 'jaimin_patel_3'

// Default data to use when API fails or rate limited
const defaultCodechefData = {
  name: "jaimin_patel_3",
  currentRating: 1643,
  highestRating: 1687,
  globalRank: 13969,
  countryRank: 12289,
  countryName: "India",
  stars: "3",
  countryFlag: "https://flagcdn.com/in.svg"  // India flag
};

export const getCodechefData = async () => {
  try {
    // this is not working so directly using default data
    return defaultCodechefData;
    // const response = await fetch(`${BASEURL}/handle/${USERNAME}`);
    // if (!response.ok) {
    //   console.warn(`CodeChef API returned ${response.status}, using default data`);
    //   return defaultCodechefData;
    // }
    // return await response.json();
  } catch (error) {
    console.error('Error fetching CodeChef data:', error);
    return defaultCodechefData;
  }
}

