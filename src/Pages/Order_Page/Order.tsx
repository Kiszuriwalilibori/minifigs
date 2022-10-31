import { Fade } from "@material-ui/core";
import { Summary, Details } from "Components";

const Order = () => {
    return (
        <Fade in={true} timeout={1500}>
            <div className="order">
                <Details />
                <Summary />
            </div>
        </Fade>
    );
};

export default Order;
