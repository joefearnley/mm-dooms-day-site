import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [levels, setLevels] = useState([]);
    const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

    const fetchLevels = async () => {
        setIsLoading(true);

        const apiUrl = `${import.meta.env.VITE_API_URL}/levels/?populate=*`;

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
            });

            const json = await response.json();
            setLevels(json.data);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLevels();
    }, [])


    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto text-center py-24">
                    <h1 className="text-6xl font-bold">Mega Man Dooms Day</h1>
                </div>
            </div>
            {isLoading ? (
                    <div className="text-center">
                        <h2 className="text-xl mb-4">Loading Levels</h2>
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                ):(
                    <div className="container mx-auto">
                        <div className="grid grid-cols-3 gap-6">
                                {levels.map(((level) => (
                                    <div key={level.id} className="level">
                                        <a href={level.url}>
                                            <img src={`${import.meta.env.VITE_API_URL}${level.image.url}`} className="max-h-48  mx-auto boss-image" alt={level.name} />
                                        </a>
                                        <h3 className="text-2xl font-bold text-center mt-4">
                                            <a href={level.url}>{level.name}</a>
                                        </h3>
                                    </div>
                                )))}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default App
