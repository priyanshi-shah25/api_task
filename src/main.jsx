import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const res = await fetch(
        "https://dummyjson.com/posts/1"
      );
      return res.json();
    },
  },
]);

createRoot(document.getElementById('root')).render(
   //<QueryClientProvider client={client}>
  //  <RouterProvider router={router} />
    <App />

  //</QueryClientProvider>,
)


