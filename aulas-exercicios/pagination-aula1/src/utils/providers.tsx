"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./queryClient"
import { ReactNode } from "react"


type Props = {children: ReactNode}
export const Providers = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}