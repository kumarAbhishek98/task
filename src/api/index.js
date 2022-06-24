import axios from "axios";
import { authHeader } from "../utils";

const URL = `https://jobs-api.squareboat.info/api/v1`;

export const API = axios.create({
  baseURL: URL,
  headers: {
    ...authHeader(),
  },
});
