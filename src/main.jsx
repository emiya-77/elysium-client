import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import DataProvider from './providers/DataProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>,
)
