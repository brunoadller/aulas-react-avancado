//TYPES DE CADA FUNÇÃO E SEU PARÂMETROS
type AddAction = {
    type: 'add'
    payload: {
        text: string
    }
}
type EditTextAction = {
    type: 'editText'
    payload:{
        id: number
        newText: string

    }
}
type ToggleDoneAction = {
    type: 'toggleDone'
    payload: {
        id: number
    }
}
type RemoveAction = {
    type:   'remove'
    payload: {
        id: number
    }
}
//DEFININDO CADA TYPE QUE LISTA TERÁ DEPENDENDO DOQUE FOR FAZER
type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction

//Cria-se uma list para o reducer receber a lista e actions define as ações do mesmo
export const listReducer = (list: Item[], action: ListActions) => {
    //executar alguma ação

    switch(action.type){
        case 'add':
            return [
                ...list, {
                    id: list.length,
                    text: action.payload.text,
                    done: false
                }
            ]
        case  'editText':
            return list.map(t => {
                if(t.id === action.payload.id) t.done = !t.done
                return t
            })

        case 'toggleDone':
            return list.map(t => {
                if(t.id === action.payload.id) t.done =!t.done
                return t
            })

        case 'remove':
            return list.filter(t => t.id !== action.payload.id)

        default:
            return list
    }
    //diz qual é a ação
    action.type
    //diz que dentro do container tem uma carga específica
    //dado que se manda junto da ação
    action.payload

    //retorna lista atualizada
    return list 
}