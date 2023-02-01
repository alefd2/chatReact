import { useState } from "react";
import "./message.css";

export const Message = ({ content, hour, author, main }) => {

    return (
        <article>
            <div className={main ? "mainUser" : "secondUSer"}>
                <p>{author} - {hour}</p>
                <div className={main ? "wrapperMessMain" : "wrapperMessSecond"}>
                    <p className="texto">{content}</p>
                </div>
            </div>

        </article>
    )
}