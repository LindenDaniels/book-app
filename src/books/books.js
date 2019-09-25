import React from 'react';
import './books.css';

export default function Books(props) {
    return (
        <div className = "book">
            <div className="book__column">
                <div className="book__title">
                    <a href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">
                           {props.title}
                       </a>
                </div>
                <div className="book__author">
                    {props.author}
                </div>
                <div className="book__price">
                    {props.price}
                </div>
                <div className = "book__description">
                    {props.description}
                </div>
                <div className = "book__picture">
                    {props.picture}
                </div>
            </div>

        </div>
    )
}