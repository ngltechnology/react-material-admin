import React,{Fragment} from "react"
import TextField from '@material-ui/core/TextField';

const FormCard = props => {
  return(
    <Fragment>
      <TextField
        name="test"
        onChange={props.handleChanged}
        margin="normal"
        variang="outlined"
        fullWidth
        />
    </Fragment>
  )
}
export default FormCard
