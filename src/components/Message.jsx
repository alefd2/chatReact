import "./message.css";

export const Message = ({ content, data, author, main }) => {
    return (
        <div className={main ? "mainUser" : "secondUSer"}>
            <p>{author} - {data}</p>
            <div className={main ? "wrapperMessMain" : "wrapperMessSecond"}>
                <p className="texto">{content}</p>
            </div>
        </div>
    )
}