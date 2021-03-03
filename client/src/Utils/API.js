import axios from "axios";

export default {
  empResults: function () {
    return axios.get("https://randomuser.me/api/?results=10");
  },
};
