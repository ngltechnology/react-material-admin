import { compose, withState } from "recompose";

import PostView from "./Card";

export default compose(
  withState("mainChartState", "setMainChartState", "monthly")
)(PostView);
