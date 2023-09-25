import React from "react";
import Header from "./components/header/Header";
import Board from "./components/boards/Board";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
    </DndProvider>
  );
}
