"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import useQueryParams from "@/hooks/useQueryParams";

export const SearchForm = () => {
	const { updateQueryParams, getQueryParam } = useQueryParams();
	const [searchKeyword, setSearchKeyword] = useState(getQueryParam("search") || "");

	return (
		<form
			className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
			onSubmit={(e) => {
				e.preventDefault();

				updateQueryParams({ search: searchKeyword });
			}}>
			<Input
				className="text-foreground bg-background placeholder:text-foreground h-auto rounded-3xl border-none px-6 py-4 placeholder:text-opacity-70"
				placeholder="Search movies by title or keyword..."
				value={searchKeyword}
				onChange={(e) => {
					setSearchKeyword(e.target.value);
				}}
			/>

			<Button
				variant="outline"
				className="text-background h-auto w-full rounded-[30px] bg-primary px-6 py-4 sm:box-content sm:w-auto">
				Search <Search />
			</Button>
		</form>
	);
};
