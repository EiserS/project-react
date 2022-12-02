import {useSearchParams} from "react-router-dom";

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const category = searchParams.get('category')

    return (
        <>
            <h1>Name</h1>
            <p>
                {name}
            </p>
            <h1>Min Price</h1>
            <p>
                {minPrice}
            </p>
            <h1>Max Price</h1>
            <p>
                {maxPrice}
            </p>
            <h1>Category</h1>
            <p>
                {category}
            </p>
        </>
    )
}