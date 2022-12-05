import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { ProjectFooter } from "../components/ProjectFooter"

const RouteItems = [
    { name: "Home", link: "/my-Affirmations/", element: <Home /> },
    { name: "Home", link: "/my-Affirmations/*", element: <Home /> },
    { name: "Dashboard", link: "/my-Affirmations/Dashboard", element: <Dashboard /> }
]


export const AppRoutes = () => {
    return (
        <div className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100">
            <BrowserRouter>
                <ProjectNavbar />
                <Routes>
                    {
                        RouteItems.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element}
                                />
                            )
                        })
                    }
                </Routes>
                <ProjectFooter />
            </BrowserRouter>
        </div>
    )
}