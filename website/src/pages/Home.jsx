
import { useState, useEffect } from 'react'
import LevelDetail from '../components/LevelDetail'

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [levels, setLevels] = useState([]);

    const fetchLevels = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_API_URL}/levels/?acf_format=standard`;

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();

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
                    <h1 className="text-6xl font-bold">Levels</h1>
                </div>
            </div>
            {isLoading ? (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Loading Levels</h2>
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ):(
                <div className="container mx-auto mb-12">
                    <div className="grid gird-cols-1 md:grid-cols-3 gap-6">
                            {levels.map((level => (
                                <LevelDetail key={level.id} levelId={level.acf.mmm_level_id} />
                            )))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
