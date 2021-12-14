import Layout from "components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/configureAppStore";

import { decrement,increment } from "./redux";
import { getCounts } from "./selectors";

const Basic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counts = useSelector(getCounts);

  return (
    <Layout title="Redux Basic Example">
      <p>
        Counts: {counts}
        <br />
        <button onClick={() => dispatch(increment(1))} type="button">
          increment
        </button>
        <button onClick={() => dispatch(decrement(1))} type="button">
          decrement
        </button>
      </p>
    </Layout>
  );
};

export default Basic;
