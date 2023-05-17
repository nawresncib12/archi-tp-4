import axios from "axios";
import API_URL from "../api";

export const getUser = async (id = 1) => {
  return await axios
    .get(`${API_URL}/users/${id}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      return false;
    })
    .catch(() => {
      return false;
    });
};
