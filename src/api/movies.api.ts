import { AxiosError } from "axios";

import { apiInstance } from "@/api";

export const getMovies = async (params = {}) => {
	const queryString = new URLSearchParams(params).toString();
	try {
		const response = await apiInstance.get(`/movies?${queryString}`);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) return error.response?.data;

		console.error(error);
		throw new Error("An error occurred while fetching movies");
	}
};
