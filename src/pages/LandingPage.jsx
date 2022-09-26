import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
    //pasamos a resetar estos elementos para una nueva busqueda en el moviesGrid
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300);
    return (
        <div>
            <Search />
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    );
}