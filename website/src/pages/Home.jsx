
import { useState, useEffect } from 'react'
import LevelDetail from '../components/LevelDetail'

function Home() {
    const [levels, setLevels] = useState([]);

    const fetchLevels = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_API_URL}/levels/?acf_format=standard`;

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();

            setLevels(json);
        } catch (error) {
            console.error('Error fetching levels:', error);
        }
    };

    useEffect(() => {
        fetchLevels();
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto text-center py-12">
                    <h1 className="text-6xl font-bold text-white text-center">
                        <img className="my-6 mx-auto max-w-3/4" src="https://mm-dooms-day.jfrnly.dev/wp-content/uploads/2025/08/megaman-maker-logo.png" alt="Mega Man Maker Logo" srcset="https://mm-dooms-day.jfrnly.dev/wp-content/uploads/2025/08/megaman-maker-logo.png 640w, https://mm-dooms-day.jfrnly.dev/wp-content/uploads/2025/08/megaman-maker-logo-300x103.png 300w" sizes="auto, (max-width: 640px) 100vw, 640px" />
                    </h1>
                </div>
            </div>
            <div className="container mx-auto mb-12">
                <div className="grid gird-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {levels.map((level => (
                        <LevelDetail key={level.id} levelId={level.acf.mmm_level_id} />
                    )))}
                </div>
            </div>
        </>
    )
}

export default Home
