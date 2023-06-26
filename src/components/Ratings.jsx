// import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/Ratings.css';


export function Ratings({ data }) {
    const orderedList = [...data].sort((a, b) => b.votes - a.votes);
    const topFive = orderedList.slice(0, 5);

    return (
        <section id="character-ratings">
            <h4>Top Characters</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skillset</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {topFive.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
                            <td>{item.name}</td>
                            <td>{item.skillset}</td>
                            <td>{item.votes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}


export default Ratings

