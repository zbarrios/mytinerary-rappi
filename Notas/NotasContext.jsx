import { createContext, useReducer } from "react";

export const NotasContext = createContext(null);

export const NotasDispatchContext = createContext(null);

export function NotasProvider({children}){
    const [notas,dispatch] = useReducer(notaReducer,initialNotas);

    return (
        <>
        <NotasContext.Provider value={notas}>
            <NotasDispatchContext.Provider value={dispatch}>
                {children}
            </NotasDispatchContext.Provider>
        </NotasContext.Provider>
        </>
    )
}

export function notaReducer(state, action) {
  switch (action.type) {
    case "create": {
      console.log("Entro");
      console.log(action);
      return [
        ...state,
        { id: Date.now(), text: action.text, importante: false },
      ];
    }
    case "delete": {
      console.log("Entro");
      console.log(action);
      return state.filter((nota) => nota.id !== action.id);
    }
    case "edit": {
      console.log("Entro");
      console.log(action);
      return state.map((nota) =>
        nota.id === action.id ? { ...nota, text: action.newText } : nota
      );
    }
    case "pick": {
      console.log("Entro");
      console.log(action);
      return state.map((nota) =>
        nota.id === action.id ? { ...nota, importante: !nota.importante } : nota
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

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