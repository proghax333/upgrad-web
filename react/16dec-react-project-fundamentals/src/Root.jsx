import { BrowserRouter, Route, Routes } from "react-router";

import ComponentsAndPropsApp from "./modules/17dec/ComponentsAndPropsApp";
import TextAnalyzerApp from "./modules/18dec/TextAnalyzerApp";
import TodoList from "./modules/19dec/todo-list/TodoList";
import MusicPlayer from "./modules/19dec/music-player/MusicPlayer";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="components-and-props"
          element={<ComponentsAndPropsApp />}
        />
        <Route path="text-analyzer" element={<TextAnalyzerApp />} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path="music-player" element={<MusicPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
