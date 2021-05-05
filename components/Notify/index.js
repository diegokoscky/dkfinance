import { useContext } from "react";
import { DataContext } from "../../central/GlobalState";
import Loading from "../Loading";
import ToastComponent from "../Toast/index";

const Notify = () => {
    const [state, dispatch] = useContext(DataContext);
    const { notify } = state;

    return (
        <>
            {notify.Loading && <Loading />}
            {notify.error && (
                <ToastComponent
                    msg={{
                        msg: notify.error,
                        title: "Erro",
                    }}
                    handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
                    bgColor="bg-danger"
                />
            )}
            {notify.success && (
                <ToastComponent
                    msg={{ msg: notify.success, title: "Isso aí!" }}
                    handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
                    bgColor="bg-success"
                />
            )}
        </>
    );
};

export default Notify;
