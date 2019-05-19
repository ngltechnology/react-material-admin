import { compose, withState } from "recompose";

import PostView from "./PostView";

export default compose(
  withState("mainChartState", "setMainChartState", "monthly")
)(PostView);
