export const FORM_CHANGED = "Company/FORM_CHANGED";

export const formChanged = e => ({
  type: FORM_CHANGED,
  value:e.target.value,
  key:e.target.key
});

export default (state = null,action) => {
  switch (action.type) {
    case FORM_CHANGED:
      return Object.assign({},{
        ...state,
        [action.key]: action.value
      })
    default:
      return state
  }
}

