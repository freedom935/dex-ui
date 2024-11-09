import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TermsPage from "./pages/TermsPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
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