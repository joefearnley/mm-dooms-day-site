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
            <div className="text-center w-3/4 mx-auto">
                <div className="skeleton h-32 w-32 shrink-0 rounded-full mx-auto mb-6 mt-10"></div>
                <div className="skeleton h-10 w-full mb-6"></div>
                <div className="skeleton h-10 w-full mb-6"></div>
                <div className="skeleton h-10 w-full"></div>
            </div>
        ) : (
            <div className="card bg-base-100 w-96 shadow-sm mx-auto">
                <figure className="px-10 pt-10">
                    <a href={`/level/${props.levelId}`}>
                        <img src={level.thumbnail_url} alt={level.name} className="h-32 w-32 rounded-full" />
                    </a>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{level.name}</h2>
                    <div className="my-3 flex gap-14 md:!gap-14">
                        <div className="flex flex-col items-center justify-center w-16">
                            <p className="text-lg font-bold text-navy-700 dark:text-white">{level.likes}</p>
                            <p className="text-sm font-normal text-gray-600">Likes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-16">
                            <p className="text-lg font-bold text-navy-700 dark:text-white">{level.dislikes}</p>
                            <p className="text-sm font-normal text-gray-600">Dislikes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-16">
                            <p className="text-lg font-bold text-navy-700 dark:text-white">{level.downloads}</p>
                            <p className="text-sm font-normal text-gray-600">Downloads</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <a href={`/level/${props.levelId}`} className="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        )}
        </>
    ); 
}

export default LevelDetail