import { Skeleton } from "@/components/ui/Skeleton";

const LoadingMovies = () => {
	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{Array.from({ length: 20 }, (_, index) => (
				<Skeleton
					className="aspect-[22 / 31] h-[310px] w-full rounded-lg"
					key={index}
				/>
			))}
		</div>
	);
};

export default LoadingMovies;
