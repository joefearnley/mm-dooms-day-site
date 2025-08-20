
import { useState, useEffect } from 'react'
import { useParams } from "react-router"

function Level() {
    let { levelId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [level, setLevel] = useState({});

    const fetchLevelData = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_LEVEL_DETAIL_API_URL}/${levelId}`;

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
        setTimeout(fetchLevelData, 1000);
    }, [])

    return (
        <div className="container mt-12 mx-auto">
            {isLoading ? (
                <div className="text-center">
                    <div className="skeleton h-32 w-32 shrink-0 rounded-full mx-auto mb-6 mt-10"></div>
                    <div className="skeleton h-12 w-1/4 mb-6 mx-auto"></div>
                    <div className="skeleton h-12 w-1/4 mb-12 mx-auto"></div>
                </div>
            ):(
                <div className="flex flex-col items-center">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <a href={`/level/${level.id}`}>
                                <img src={level.thumbnail_url} alt={level.name} className="h-32 w-32 rounded-full" />
                            </a>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">{level.name}</h2>
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
                                <a href={`https://megamanmaker.com/?level=${level.id}`} target="_blank" className="btn btn-info">
                                    Play game
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Level
