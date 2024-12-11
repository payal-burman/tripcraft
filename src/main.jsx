import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/index.jsx'
import Footer from './components/custom/Footer.jsx'

const router = createBrowserRouter([
  {
    path:'/deploy_react_app_github_pages_vercel',
    element:<App/>
  },
  // {
  //   path:'/create-trip',
  //   element:<CreateTrip/> 
  // },
  // {
  //   path:'/view-trip/:tripId',
  //   element:<ViewTrip/>
  // },
  // {
  //   path:'/my-trips',
  //   element:<MyTrips/>
  // },
  {
    path:'/deploy_react_app_github_pages_vercel/create-trip',
    element:<CreateTrip />
  },

  {
    path:'/deploy_react_app_github_pages_vercel/view-trip/:tripId',
    element:<ViewTrip/>
  },

  {
    path:'/deploy_react_app_github_pages_vercel/my-trips',
    element:<ViewTrip/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
    <Footer />
  </StrictMode>,
)