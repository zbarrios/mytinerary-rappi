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

  export function notaReducer(state,action){
    switch (action.type){
        case "create": {

          
            return [
                ...state,
                { id: Date.now(),  text: action.text, importante: false },
            ];
        }
        case "delete": {
            return state.filter((nota) => nota.id !== action.id);
        }
        case "edit" : {
            return  state.map((nota) => (nota.id === action.id ? { ...nota, text: action.newText } : nota));
        }
        case "pick": {
            return state.map((nota)=> (nota.id=== action.id?{...nota,importante:!nota.importante}:nota))
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }

  }