
import { useState, useEffect } from 'react'

function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [levels, setLevels] = useState([]);
    // const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

    const fetchLevels = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_API_URL}/levels/?acf_format=standard`;

        try {
            // const response = await fetch(apiUrl, {
            //     headers: {
            //         'Authorization': `Bearer ${apiToken}`
            //     }
            // });

            const response = await fetch(apiUrl);

            const json = await response.json();


            console.log(json);

            setLevels(json);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(fetchLevels, 1000);
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto text-center pt-12 pb-24">
                    <h1 className="text-6xl font-bold">Mega Man Dooms Day</h1>
                </div>
            </div>
            {isLoading ? (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Loading Levels</h2>
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ):(
                <div className="container mx-auto mb-12">
                    <div className="grid grid-cols-3 gap-6">
                            {levels.map(((level) => (
                                <div key={level.id} className="level">
                                    <a href={level.acf.url}>
                                        <img src={`${level.acf.image.url}`} className="max-h-48  mx-auto boss-image" alt={level.acf.name} />
                                    </a>
                                    <h3 className="text-2xl font-bold text-center mt-4">
                                        <a href={level.acf.url}>{level.acf.name}</a>
                                    </h3>
                                </div>
                            )))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
