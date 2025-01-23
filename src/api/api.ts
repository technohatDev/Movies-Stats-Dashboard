import axios from "axios";

export const apiInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json"
	}
});
