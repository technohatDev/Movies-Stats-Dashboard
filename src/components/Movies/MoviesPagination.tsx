import type { FC } from "react";

import {
	Pagination as PaginationComponent,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from "@/components/ui/Pagination";
import { cn } from "@/utils/functions.util";

interface MoviesPaginationProps {
	currentPage: number;
	onPageChange: (page: number) => void;
	totalPages: number;
}

export const MoviesPagination: FC<MoviesPaginationProps> = ({
	currentPage,
	onPageChange,
	totalPages
}) => {
	return (
		<PaginationComponent>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						className={cn({
							"text-foreground/70 border-foreground/70 border": currentPage > 1,
							"bg-foreground/30 cursor-not-allowed": currentPage === 1
						})}
						href="#"
						onClick={(e) => {
							e.preventDefault();

							if (currentPage <= 1) return;
							onPageChange(currentPage - 1);
						}}
					/>
				</PaginationItem>
				{Array.from({ length: totalPages }, (_, index) => (
					<PaginationItem key={index}>
						<PaginationLink
							className={cn({
								"text-foreground/70 border-foreground/70 border": currentPage - 1 !== index
							})}
							href="#"
							onClick={(e) => {
								e.preventDefault();

								onPageChange(index + 1);
							}}
							isActive={currentPage - 1 === index}>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						className={cn({
							"text-foreground/70 border-foreground/70 border": currentPage < totalPages,
							"bg-foreground/70 cursor-not-allowed": currentPage >= totalPages
						})}
						onClick={(e) => {
							e.preventDefault();

							if (currentPage >= totalPages) return;
							onPageChange(currentPage + 1);
						}}
						href="#"
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationComponent>
	);
};
