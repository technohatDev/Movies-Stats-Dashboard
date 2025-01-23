import { getMovies } from "@/api";
import { MoviesList } from "@/components/Movies";
import { SearchForm } from "@/components/SearchForm/SearchForm";
import useQueryParams from "@/hooks/useQueryParams";
import type { MovieItem } from "@/models/movie.model";
import LoadingMovies from "@/pages/Home/MoviesLoading";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
	const { getQueryParam } = useQueryParams();
	const search = getQueryParam("search");

	const { data, isLoading } = useQuery<MovieItem[]>({
		queryKey: ["movies", { search }],
		queryFn: () =>
			getMovies(
				search
					? {
							search
						}
					: {}
			)
	});

	return (
		<div className="flex flex-col gap-10">
			{/* Header */}
			<div>
				<div className="text-foreground text-center text-3xl font-semibold">Movies List</div>

				<SearchForm />
			</div>

			{isLoading ? (
				<LoadingMovies />
			) : (
				<>
					{/* Movies List */}
					{data?.length ? (
						<MoviesList moviesList={data} />
					) : (
						<div className="border-foreground/70 text-foreground/70 rounded-xl border-2 border-dashed p-5 text-center text-xl">
							No movies found
						</div>
					)}
				</>
			)}
		</div>
	);
};
