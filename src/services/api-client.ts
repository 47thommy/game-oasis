import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fb0cc99141974f86b10ce7e91c70bf79",
  },
});
