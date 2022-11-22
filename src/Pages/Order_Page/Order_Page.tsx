import { Summary, OrderDetails, Message } from "components";

interface Props {
    message: string;
    isMessage: boolean;
}

const Order_Page = (props: Props) => {
    const { isMessage, message } = props;
    return (
        <div className="order">
            <OrderDetails />
            <Summary />
            {isMessage && <Message message={message} />}
        </div>
    );
};

export default Order_Page;
