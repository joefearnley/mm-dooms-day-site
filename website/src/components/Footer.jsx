
function Footer() {
    return (
        <>
            <div className="container py-6">
                <div className="w-5/6 mx-auto border-b border-gray-300"></div>
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

export default Footer