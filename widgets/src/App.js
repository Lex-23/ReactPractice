import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "FE framework",
  },
  {
    title: "Why is React?",
    content: "It is good",
  },
  {
    title: "How to use React?",
    content: "By hooks",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
