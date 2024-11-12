import { Provider } from "react-redux";
import { store } from "..";

type Props = Readonly<{ children: React.ReactNode }>

export const ReduxProvider = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>;
}