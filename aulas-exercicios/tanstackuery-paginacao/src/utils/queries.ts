import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";
import { placeholderdata } from "@/data/placeholderData";


export const usePosts = (limit:number, start: number) => useQuery({
    queryKey: ['posts', {limit, start}],
    queryFn: () => getPosts(limit, start),
    placeholderData: placeholderdata,


})