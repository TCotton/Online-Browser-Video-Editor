export function fileReducer(state = {}, action) {
    console.log(state, 'file time');
    switch (action.type) {
        case 'add': {
            return {
                ...state,
                file: state.file
            }
        }
        default: {
            throw new Error(`Unhandled type ${action.type}`);
        }
    }
}