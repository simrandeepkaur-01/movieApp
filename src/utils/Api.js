import React, { useEffect, useState } from 'react'

export default function useApi(url) {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [backdrops, setBackdrops] = useState([]);

    const authKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDE0YmQzZTA3MGNlN2RlNDJjYzA0Zjg0MmNkNDkwOCIsInN1YiI6IjY1YjFmM2VhNzg1NzBlMDBjOTY3NmIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5MLHIDJthYsEjNI0Ey6chlzw6IqeUf6jzAYVewKvcqA';

    useEffect(() => {
        async function fetchApi() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${authKey}`
                    }
                };

                const response = await fetch(url, options);
                if (response.ok) {
                    const result = await response.json();
                    setMovies(result);
                    setGenres(result);
                    setBackdrops(result);
                }
            } catch (error) {
                console.log('error in api');
            }
        }

        fetchApi();
    }, [url])

    return { movies, genres, backdrops }
}
