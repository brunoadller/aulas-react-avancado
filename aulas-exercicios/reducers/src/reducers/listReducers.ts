
type AddAction = {
    type: 'add'
    payload: {
        text: string
    }
}
type EditTextAction = {
    type:  'edit'
    payload: {
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
    type: 'remove'
    payload: {
        id: number
    }
}
type ListAction = AddAction | EditTextAction | ToggleDoneAction | RemoveAction

export const listReducers = (list: Item[], action: ListAction) => {
    switch(action.type){
        case 'add':
            return [...list,{
                id: list.length + 1,
                text: action.payload.text,
                done: false
            }]
            
        case 'edit':
            return list.map(t => {
                if(t.id === action.payload.id){
                    t.text = action.payload.newText
                }
                return t
            })
            
        
        case 'toggleDone':
            return list.map(t => {
                
                if(t.id === action.payload.id){
                    
                    t.done = !t.done;
                }
                return t
            })
           

        case 'remove':
            return list.filter(t => t.id !== action.payload.id)
            

        default:
            return list
    }
    return list
}