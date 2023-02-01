import { useState } from "react";
import { Message } from "./Message";
import { PaperPlaneRight } from "phosphor-react";
import "./chat.css";
import { addDays, formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Chat = () => {
  const [newMessage, setNewMessage] = useState({
    id: Math.random,
    main: false,
    author: "Alef Oliveira",
    content: "",
    hour: "",
  });

  const [messages, setMessages] = useState([
    {
      id: Math.random,
      main: false,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: true,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "Hoje Às 20:40",
    },
    {
      id: Math.random,
      main: false,
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

  const handleChange = e => {
    const currentData = formatRelative(addDays(new Date(), 0), new Date(), {
      locale: ptBR,
    });

    let currentMesage = e.target.value;
    let reDot = /[*]/g;

    const inicio = currentMesage.search(reDot);
    const fim = currentMesage.search(reDot, inicio + 1);

    // if (inicio > 0) {
    //   currentMesage = formataText(inicio, fim, currentMesage);
    // }

    setNewMessage({
      ...newMessage,
      content: currentMesage,
      hour: currentData,
    });
  };

  const formataText = (inicio, fim, currentMesage) => {
    return (
      <p>
        {currentMesage.slice(0, inicio)}
        <strong>{currentMesage.slice(inicio, fim)}</strong>
        {currentMesage.slice(fim)}
      </p>
    );
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
            onChange={e => handleChange(e)}
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
