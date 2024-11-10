import { useQuery } from "@tanstack/react-query";
import { getCountries } from "./get-countries";

export function useGetCountries(){
    return useQuery({
        queryKey: ["countries"],
        queryFn: getCountries
    })
}