
import { useState, useEffect } from 'react'

function About() {

    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState('');

    const fetchAboutData = async () => {
        const apiUrl = `${import.meta.env.VITE_STRAPI_API_URL}/about?populate=*`;
        const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
            });

            const json = await response.json();
            console.log(json.data.blocks[0].body);
            setContent(json.data.blocks[0].body);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(fetchAboutData, 1000);
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto text-center pt-12 pb-24">
                    <h1 className="text-6xl font-bold">About This Site</h1>
                </div>
            </div>
            {isLoading ? (
                <div className="text-center">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ):(
                <div className="container mx-auto mb-12">
                    <div className="mx-auto w-5/6">
                        {content}
                    </div>
                </div>
            )}
        </>
    )
}

export default About
