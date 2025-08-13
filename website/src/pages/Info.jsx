
import { useState, useEffect } from 'react'

function Info() {
    const [isLoading, setIsLoading] = useState(false);
    const [pageContent, setPageContent] = useState('');

    const fetchInfoPageData = async () => {
        const apiUrl = `${import.meta.env.VITE_WP_API_URL}/pages?slug=info`;

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();

            setPageContent(json[0].content.rendered);
        } catch (error) {
            console.error('Error fetching levels:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(fetchInfoPageData, 1000);
    }, [])

    return (
        <div className="inside-page">
            <div className="container mx-auto">
                <div className="mx-auto text-center py-12">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Site Info
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
                        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Info
