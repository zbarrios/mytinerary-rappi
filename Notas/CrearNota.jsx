import { useContext, useState } from "react";
import { NotasDispatchContext } from "./NotasContext";

export default function CrearNota() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotasDispatchContext);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Crear Nota</h1>
        <input
          type="text "
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-gray-300 p-2 m-2"
        />
        <button
          onClick={() => dispatch({ type: "create", text: text})}
          className="border-2 border-gray-300 p-2 m-2 hover:bg-blue-300"
        >
          Crear
        </button>
      </div>
    </>
  );
}
