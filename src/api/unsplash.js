import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NUiav3RycBPrUbkIl9-bXvLNxDZg1zafzFv1MAfcFJg",
  },
});
