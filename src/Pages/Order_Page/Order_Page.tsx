import { Summary, OrderDetails, Message } from "components";
import { isOffline } from "functions";

interface Props {
    message: string;
    isMessage: boolean;
}

const Order_Page = (props: Props) => {
    const { isMessage, message } = props;
    if (isOffline()) return <Message message={"No Internet Connection, try again some later"} />;
    return (
        <div className="order">
            <OrderDetails />
            <Summary />
            {isMessage && <Message message={message} />}
        </div>
    );
};

export default Order_Page;
