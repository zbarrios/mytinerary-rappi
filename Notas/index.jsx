import CrearNota from "./CrearNota";
import ListaNotas from "./ListaNotas";

export const initialNotas = [
  {
    id: 1,
    text: "Nota 1",
    importante: false,
  },
  {
    id: 2,
    text: "Nota 2",
    importante: false,
  },
  {
    id: 3,
    text: "Nota 3",
    importante: false,
  },
];

export default function Notas() {
  const [notas, setNotas] = useState([]);

  function handleSetNotas(nota) {
    setNotas(
      [
        ...notas,
        { id: Date.now(), text: action.text, importante: false },
      
    ])
    
  }
  
  return (
    <>
        <CrearNota />
        <ListaNotas nptas={notas} />
    </>
  );
}
