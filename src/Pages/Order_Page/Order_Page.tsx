import { OrderDetails, Message, Summary } from "./components";
import { isOffline } from "functions";

const Order_Page = () => {
    if (isOffline()) return <Message message={"No Internet connection, try again some later"} />;
    return (
        <main className="order">
            <OrderDetails />
            <Summary />
        </main>
    );
};

export default Order_Page;
