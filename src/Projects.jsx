import React from "react";

export default function Projects() {

    return (
        <>
            <h1>List all projects somehow! </h1>
            <p> This list should either contain auto fetched information from github or personal listings. </p>
            <p> First we will try to include TicTacToe follow along project, and then create our own! </p>
            <ul>
                <li key={1}>
                    Finish EDAN26.
                </li>
                <li key={2}>
                    <a href="portfolio/#/tic-tac-toe">Tic Tac Toe</a>
                </li>
                <li key={3}>
                    Fix CV.
                </li>
                <li>
                    Alphabet Game Challenge in C, C# and C++, alternate between them.
                    Also utilize different technologies for the different games.
                </li>
                <li key={4}>
                    Compiler in C.
                </li>
                <li key={5}>
                    Experiment with CSS to make the site more visually appealing.
                </li>
            </ul>
        </>
    );
}