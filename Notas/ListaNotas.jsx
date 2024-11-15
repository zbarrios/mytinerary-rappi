import { useContext } from "react";
import { NotasContext } from "./NotasContext";
import Nota from "./Nota";

export default function ListaNotas({notas}) {
    const notas = useContext(NotasContext);
  return (
    <>
      <div className="flex flex-col items-center">
      <h1 className="display-inline align-middle text-5xl mb-4">Notas</h1>
      <ul className="flex flex-col gap-4">
        {notas.map((nota) => (
          <li key={nota.id}>
            <Nota
              nota={nota}
            />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
