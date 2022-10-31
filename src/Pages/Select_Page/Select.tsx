import uuid from "react-uuid";
import { isEmpty } from "lodash";
import isEqual from "lodash/isEqual";

import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import useDispatchAction from "hooks/useDispatchAction";
import Paths from "Routing/Paths";

import { Minifig, SelectedMinifig } from "types/types";
import { Image } from "Components";
import { BasicButton } from "Components";

interface Props {
    minifigs: Minifig[];
}
const Select = (props: Props) => {
    const { minifigs } = props;
    const history = useHistory();
    const [selected, setSelected] = useState<SelectedMinifig>({});

    const selectMinifig = useCallback((minifig: SelectedMinifig) => {
        setSelected(minifig);
    }, []);

    const { setSelectedMinifig } = useDispatchAction();

    return (
        <div className="select">
            <div className="select__content-box">
                <h2>Choose your minifig</h2>
                <div className="images">
                    {minifigs &&
                        minifigs.map(fig => {
                            return (
                                fig && (
                                    <Image
                                        key={uuid()}
                                        minifig={fig}
                                        clickHandler={selectMinifig}
                                        isSelected={isEqual(fig, selected)}
                                    />
                                )
                            );
                        })}
                </div>
                <BasicButton
                    disabled={isEmpty(selected)}
                    className="button uppercased"
                    onClick={e => {
                        e.stopPropagation();
                        setSelectedMinifig(selected);
                        history.push(Paths.order);
                    }}
                >
                    Proceed to shipment
                </BasicButton>
            </div>
        </div>
    );
};

export default Select;
