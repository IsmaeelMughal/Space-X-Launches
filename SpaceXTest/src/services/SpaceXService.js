import axios from "axios";

const basePath = "http://localhost:8080";

export const getLaunches = async () => {
  try {
    const endpoint = `${basePath}/launches`;
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getRockets = async () => {
  try {
    const endpoint = `${basePath}/rockets`;
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSortedRockets = async (order) => {
  try {
    const endpoint = `${basePath}/rockets/sort/${order}`;
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getLaunchesByRocketId = async (rocketId) => {
  try {
    const endpoint = `${basePath}/launches/${rocketId}`;
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    throw error;
  }
};
