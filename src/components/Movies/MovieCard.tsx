"use client";

import { Info } from "lucide-react";
import type { FC } from "react";

import { Rating } from "@/components/Rating/Rating";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import type { MovieItem } from "@/models/movie.model";

interface MovieCardProps {
	movie: MovieItem;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="relative overflow-hidden">
						<img
							src={movie.poster}
							alt={movie.title}
							className="aspect-[22 / 31] w-full rounded-lg"
						/>

						<div className="group absolute top-0 z-40 flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]">
							<div
								className="cursor-pointer opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100"
								onClick={() => {
									window.open(movie.website, "_blank");
								}}>
								<Info
									className="absolute right-4 top-4 z-50 text-white"
									size="32px"
								/>
							</div>

							<div className="flex flex-col gap-2 p-4 text-white">
								<div className="text-lg font-semibold">{movie.title}</div>
								<div className="text-sm">{movie.year}</div>
								<Rating
									value={movie.rating}
									max={10}
									size="16px"
								/>
							</div>
						</div>
					</div>
				</TooltipTrigger>
				<TooltipContent side="top">
					<p>{movie.plot}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
