import "../styles.css";
import { useFetchFlag } from "../hooks";
import { Flag } from "./Flag";

export const App = () => {
  const { data, loading, isError } = useFetchFlag();

  if (isError) {
    return <p>Some error occured</p>;
  }

  return <div>{loading ? <p>Loading</p> : <Flag flag={data} />}</div>;
};
