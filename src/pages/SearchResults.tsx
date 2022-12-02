import {useSearchParams} from "react-router-dom";

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    return (
        <>
            <h1>Name</h1>
            <p>
                {searchParams.get('name')}
            </p>
            <h1>Min Price</h1>
            <p>
                {searchParams.get('minPrice')}
            </p>
            <h1>Max Price</h1>
            <p>
                {searchParams.get('maxPrice')}
            </p>
            <h1>Category</h1>
            <p>
                {searchParams.get('category')}
            </p>
        </>
    )
}