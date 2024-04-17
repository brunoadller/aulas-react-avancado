import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    //assim consigo definir nas queries todas as configgurações que quero fazer para não precisar
    //refazer em cada querie
    defaultOptions:{
        queries: {
            staleTime: Infinity
        }
    }
})