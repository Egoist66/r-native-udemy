import { FC } from "react";
import { AppContainer } from "./components/service/AppContainer";


const App: FC = (): JSX.Element => {
  return (
    <AppContainer withScroll={false} />
  )
};

export default App;
