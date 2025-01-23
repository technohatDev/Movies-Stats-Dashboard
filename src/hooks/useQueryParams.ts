import { useSearchParams } from "react-router";

const useQueryParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const updateQueryParams = (params: Record<string, string | null>) => {
		const query = new URLSearchParams(searchParams.toString());

		Object.entries(params).forEach(([key, value]) => {
			if (value) {
				query.set(key, value);
			} else {
				query.delete(key);
			}
		});

		setSearchParams(query.toString());
	};

	const getQueryParam = (key: string) => {
		return searchParams.get(key);
	};

	return { updateQueryParams, getQueryParam };
};

export default useQueryParams;
