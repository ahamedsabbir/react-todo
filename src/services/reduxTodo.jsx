// Constants
const TODO = { data: [] }
const READ = 'read'
const SINGLE = 'single'
const INSERT = 'insert'
const UPDATE = 'update'
const DELETE = 'delete'
const REMOVE = 'remove'

// Action Creators
const todoRead = () => ({ type: READ })
const todoSingle = (id) => ({ type: SINGLE, payload: id })
const todoInsert = (item) => ({ type: INSERT, payload: item })
const todoUpdate = (id, updates) => ({ type: UPDATE, payload: { id, updates } })
const todoDelete = (id) => ({ type: DELETE, payload: id })
const todoRemove = () => ({ type: REMOVE })

// Reducer
const todoReducer = (state = TODO, action) => {
    switch(action.type) {
        case READ:
            return {
                ...state,
                data: state.data
            }
        case SINGLE:
            return {
                ...state,
                data: state.data.find(item => item.id === action.payload)
            }
        case INSERT:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case UPDATE:
            return {
                ...state,
                data: state.data.map(item => 
                    item.id === action.payload.id ? { ...item, ...action.payload.updates } : item
                )
            }
        case DELETE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            }
        case REMOVE:
            return {
                ...state,
                data: state.data.filter(item => !item.completed)
            }
        default:
            return state
    }
}

export { todoReducer, todoRead, todoSingle, todoInsert, todoUpdate, todoDelete, todoRemove };