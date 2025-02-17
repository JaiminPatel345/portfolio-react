const BASEURL = "https://codechef-api.vercel.app";
const USERNAME = 'jaimin_patel_3'

  export const getCodechefData = async () => {
    const response = await fetch(`${BASEURL}/handle/${USERNAME}`);
    return await response.json();
  }

