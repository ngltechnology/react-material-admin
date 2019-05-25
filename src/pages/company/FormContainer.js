import {connect} from "react-redux"
import FormCard from "./form"
import { formChanged } from "./CompanyState";

const mapDispatchToProps = dispatch => ({
  handleChanged: e => dispatch(formChanged(e))
})
const FormCardContainer = connect(null,mapDispatchToProps)(FormCard)

export default FormCardContainer
