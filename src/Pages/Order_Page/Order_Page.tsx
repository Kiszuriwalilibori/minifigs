import { Fade } from "@material-ui/core";
import { Summary, OrderDetails, Message } from "Components";

interface Props {
    message: string;
    isMessage: boolean;
}

const Order_Page = (props: Props) => {
    const { isMessage, message } = props;
    return (
        <Fade in={true} timeout={1500}>
            <div className="order">
                <OrderDetails />
                <Summary />
                {isMessage && <Message message={message} />}
            </div>
        </Fade>
    );
};

export default Order_Page;
