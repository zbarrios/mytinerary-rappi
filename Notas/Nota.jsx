import { useContext, useState } from "react";
import { NotasDispatchContext } from "./NotasContext";

export default function Nota({ nota}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(nota.text);
  const dispatch = useContext(NotasDispatchContext);

  return (
    <>
      <div className="bg-gray-300 w-[500px] m-auto border-2 p-2 border-blue-500 flex flex-wrap justify-center gap-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({ type: "edit", id: nota.id, newText: newText });
              setIsEditing(false);
            }}
            className="border-2 border-gray-500 p-2 m-2 hover:bg-blue-300"
          >
            Guardar
          </button>
        </>
      ) : (
        <>
          <h2 className="w-full text-center text-xl">
            {nota.text} {nota.importante && "⭐"}
          </h2>
          <button onClick={() => setIsEditing(true)}
            className="border-2 border-gray-500 p-2 m-2 hover:bg-blue-300">Editar</button>
          <button onClick={() => dispatch({ type: "delete", id: nota.id })}
            className="border-2 border-gray-500 p-2 m-2 hover:bg-blue-300">
            Borrar
          </button>
          <button onClick={() => dispatch({ type: "pick", id: nota.id })}
            className="border-2 border-gray-500 p-2 m-2 hover:bg-blue-300">
            {nota.importante ? "Quitar Importante" : "Marcar Importante"}
          </button>
        </>
      )}
      </div>
    </>
  );
}
