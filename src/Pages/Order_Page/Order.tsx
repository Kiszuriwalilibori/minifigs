import { useEffect } from "react";
import { SelectedMinifig } from "types/index";
import { Summary, Details } from "Components";

// interface Props {
//     selectedMinifig: SelectedMinifig;
// }

const Order = (/*props: Props*/) => {
    // const { selectedMinifig } = props;

    // useEffect(() => {}, []);
    // //tu pójdzie fetch

    return (
        <div className="order">
            <Details />
            <Summary />
        </div>
    );
};

export default Order;

//  https://rebrickable.com/api/v3/lego/minifigs/fig-006052/parts/?key=8e442d7f1155bab4074dbff1e76bc680
