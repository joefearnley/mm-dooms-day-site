import { Outlet } from "react-router";
import Navigation from './Navigation'
import Footer from './Footer'

function Layout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navigation />
                <Outlet />
            <Footer />
        </main>
    )
}

export default Layout