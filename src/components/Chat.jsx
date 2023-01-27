import "./chat.css";
import { Message } from "./Message";

export const Chat = () => {
  const messages = [
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "",
    },
    {
      id: Math.random,
      main: false,
      author: "Rebecca Ellery",
      content: "Sério? Me conta mais.",
      hour: "",
    },
    {
      id: Math.random,
      main: true,
      author: "Alef Oliveira",
      content: "Tive uma ideia incrível para um projeto! 😍",
      hour: "",
    },
  ];
  return (
    <div>
      {messages.map((props, index) => (
        <Message {...props} key={index} />
      ))}
    </div>
  );
};
