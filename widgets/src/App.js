import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Grey",
    value: "grey",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
