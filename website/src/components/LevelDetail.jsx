import { useState, useEffect } from 'react'

function LevelDetail(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [level, setLevel] = useState({});

    const fetchLevel = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_LEVEL_DETAIL_API_URL}/${props.levelId}`;

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();

            setLevel(json);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchLevel();
    }, [])

    return (
        <>
        {isLoading ? (
            <div className="text-center">
                <h2 className="text-xl mb-4">Loading Level</h2>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        ) : (
            <div className="container mx-auto">
                <div className="mx-auto text-center py-6">
                    <h2 className="text-2xl font-bold">{level.name}</h2>
                </div>
                <div className="text-center mb-6">
                    <a href={`/level/${level.id}`}>
                        <img src={level.thumbnail_url} alt={level.name} className="max-h-64 mx-auto" />
                    </a>
                </div>
            </div>
        )}
        </>
    ); 
}

export default LevelDetail