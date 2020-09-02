import { useState, useEffect } from 'react'

const useFetch = (endpoint) => {
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://pokeapi.co/api/v2/' + endpoint)
            .then(response => response.json())
            .then(data => {
                setResults(data.results)
                setLoading(false)
            })
    }, [endpoint])

    return { results, isLoading };
}

export default useFetch