import axios from "axios";
import API_URL from "./api";

export const submitLoanRequest = async (file: string, id = 1) => {
  console.log("response");

  return await axios
    .post(
      `${API_URL}/orchestrer`,
      {
        id: id,
        file: file,
      },
      {}
    )
    .then((response) => {
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        console.log("responsea22");
        return response.data;
      }
      return false;
    })
    .catch(() => {
      console.log("response2");

      return false;
    });
};
