import axios from "axios";
import { baseApiUrl } from "../utils/base.js";

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${baseApiUrl}/users`, {
      params: { username },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Request failed with status code ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error("Error setting up the request");
    }
  }
};
