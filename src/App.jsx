import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/terms",
    element: <TermsPage />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App