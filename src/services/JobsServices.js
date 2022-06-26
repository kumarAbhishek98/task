import { API } from "../api";

export const FetchOneJob = async (id) => {
  try {
    let response = await API.get(`/recruiters/jobs/${id}/candidates`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchAllJobs = async () => {
  try {
    let response = await API.get(`/recruiters/jobs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchJobsByPages = async (pageNo) => {
  try {
    let response = await API.get(`/recruiters/jobs?page=${pageNo}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};