import { useState, useEffect } from 'react';

const useHttp = (url, dependencies) => {
    const [loading, setLoading] = useState(null);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setLoading(true);
        console.log('Sending HTTP request');

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                setFetchedData(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }, dependencies);

    return [loading, fetchedData];
};

export default useHttp;
