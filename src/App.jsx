import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"
import MainLayout from "./layouts/mainLayout"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/terms",
        element: <TermsPage />
      }
    ]
  },

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App