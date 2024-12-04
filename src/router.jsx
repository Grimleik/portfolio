
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from './Navbar';
import Projects from './Projects';
import Contact from './Contact';

import TicTacToe from './TicTacToe';

// import { createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from "react-router-dom";
// import router from './router';
// NOTE(pf): Since we are publishing to github pages we have to use hahsrouters.
// const router = createBrowserRouter([
//     {
//         path: "/portfolio/",
//         element: <App />,
//         children: [
//             {
//                 path: "tic-tac-toe",
//                 element: <TicTacToe />,
//             },
//             {
//                 index: true,
//                 element: <HomePage /> 
//             },
//         ],
//     },
//     {
//         path: "/*",
//         element: <p>This is not a valid page.</p>
//     },
// ]);

// export default function Router() {
//     return (<>
//         <React.StrictMode>
//             <RouterProvider router={router} />
//         </React.StrictMode>
//     </>);
// }

export default function Router() {
    return (
        <HashRouter basename=''>
            <Header />
            <Navbar />
            <Routes>
                {/* Navbar Links */}
                <Route path="" element={<HomePage />} />
                <Route path="projects" element={<Projects/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="*" element={<p>Page not found.</p>} />

                {/* 'Hidden' pages */}
                <Route path="tic-tac-toe" element={<TicTacToe />} />
            </Routes>

            <Footer />
        </HashRouter>
    );
}