
import React from 'react';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import HomePage from './HomePage';

// export const router_basename = "/portfolio";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "tic-tac-toe",
                element: <TicTacToe />,
            },
            {
                index: true,
                element: <HomePage /> 
            },
        ],
    },
    {
        path: "/*",
        element: <p>This is not a valid page.</p>
    },
]);

export default router;