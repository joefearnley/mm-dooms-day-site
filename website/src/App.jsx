import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [levels, setLevels] = useState([]);
    const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

    const fetchLevels = async () => {
        const apiUrl = `${import.meta.env.VITE_STRAPI_API_URL}/levels/?populate=*&sort[0]=sort_order:asc`;

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
        setIsLoading(true);
        setTimeout(fetchLevels, 1000);
    }, [])


    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="/">Home</a></li>
                            <li><a href="/info">Info</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
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
                                    <a href={level.url}>
                                        <img src={`${import.meta.env.VITE_STRAPI_BASE_URL}${level.image.url}`} className="max-h-48  mx-auto boss-image" alt={level.name} />
                                    </a>
                                    <h3 className="text-2xl font-bold text-center mt-4">
                                        <a href={level.url}>{level.name}</a>
                                    </h3>
                                </div>
                            )))}
                    </div>
                </div>
            )}
            <div class="container py-6">
                <div class="w-5/6 mx-auto border-b border-gray-300"></div>
            </div>
            <div className="footer justify-center">
                <div className="container mx-auto py-6 justify-center">
                    <p className="text-sm w-full text-center">Made with ❤️</p>
                    <p className="text-sm w-full text-center">Powered by <a href="https://strapi.io" target="_blank" rel="noopener noreferrer">Strapi</a> and <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a></p>
                </div>
            </div>
        </>
    )
}

export default App
