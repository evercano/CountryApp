import { Country } from "./country"
import { Region } from "./region.type"

export interface CacheStore {
    byCapital : TermContry
    byCountry : TermContry
    byRegion : RegionContry
}


export interface TermContry {
    term : string
    countries : Country[]
}

export interface RegionContry {
    region?: Region
    countries : Country[]
}

