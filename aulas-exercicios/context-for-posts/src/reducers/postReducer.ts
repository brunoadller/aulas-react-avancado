


type addACtions = {
    type: 'add',
    payload: {
        title: string,
        description: string
    }
}
type removeACtions = {
    type: 'remove',
    payload: {
        id: number
    }
}




export type PostActions = addACtions | removeACtions

export const postReducer = (posts: Posts[], action: PostActions ) => {
    switch(action.type){
        case 'add':
            return [...posts, {id: posts.length,title: action.payload.title, description: action.payload.description}]
        break

        case 'remove':
            return posts.filter(p => p.id !== action.payload.id)
        break

        default:
            return posts
        break
    }
}