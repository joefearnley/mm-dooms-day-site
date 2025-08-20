
import { useState, useEffect } from 'react'
import { useParams } from "react-router"

function Level() {
    let { levelId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [levelData, setLevelData] = useState({});

    const fetchLevelData = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_LEVEL_DETAIL_API_URL}/${levelId}`;

        console.log('Fetching Level Data from:', apiUrl);

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();

            setLevelData(json);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(fetchLevelData, 1000);
    }, [])

    return (
        <div className="inside-page">
            <div className="container mx-auto">
                <div className="mx-auto text-center py-12">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Level {levelId}
                    </h1>
                </div>
            </div>
            {isLoading ? (
                <div className="text-center">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ):(
                <div className="container mx-auto mb-12">
                    <div className="mx-auto w-5/6 md:w-1/2">
                        level data is loaded
                    </div>
                </div>
            )}
        </div>
    )
}

export default Level
