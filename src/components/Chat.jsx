import { useState } from "react";
import { Message } from "./Message";
import { PaperPlaneRight } from "phosphor-react";
import "./chat.css";
import { addDays, formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Chat = () => {
  const [newMessage, setNewMessage] = useState({
    id: Math.random,
    main: true,
    author: "Alef Oliveira",
    content: "",
    hour: "",
  });

  const [messages, setMessages] = useState([
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
  ]);

  const handleCreateNewMessage = event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.value !== "" && newMessage.content !== null) {
      setMessages([...messages, newMessage]);
    }

    setNewMessage({ ...newMessage, content: "" });
  };

  const handleCreateNewMessageValid = event => {
    event.preventDefault();
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  // const isNewMessageEmpty = newMessage.length === 0;

  return (
    <>
      <div>
        {messages.map((props, index) => (
          <Message {...props} key={index} />
        ))}
      </div>
      <form onSubmit={handleCreateNewMessage}>
        <div className="input-ps">
          <input
            autoComplete="off"
            name="message"
            placeholder="Digite sua mensagem"
            value={newMessage.content}
            onChange={e => {
              const currentData = formatRelative(
                addDays(new Date(), 0),
                new Date(),
                {
                  locale: ptBR,
                }
              );
              setNewMessage({
                ...newMessage,
                content: e.target.value,
                hour: currentData,
              });
            }}
            onInvalid={handleCreateNewMessageValid}
            required
          />
          <button type="submit">
            <PaperPlaneRight
              size={30}
              weight="fill"
              color="white"
              className="icone"
            />
          </button>
        </div>
      </form>
    </>
  );
};
