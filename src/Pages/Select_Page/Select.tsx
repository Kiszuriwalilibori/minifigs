import uuid from "react-uuid";
import { useLazyAxios } from "use-axios-client";
import { isEmpty } from "lodash";
import isEqual from "lodash/isEqual";

import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import useDispatchAction from "hooks/useDispatchAction";
import Paths from "Routing/Paths";

import { Minifig, Results, SelectedMinifig } from "types/types";
import { Image } from "Components";
import { BasicButton } from "Components";

interface Props {
    minifigs: Minifig[];
}
const Select = (props: Props) => {
    const { minifigs } = props;
    const history = useHistory();
    const [selected, setSelected] = useState<SelectedMinifig>({});

    const URL =
        "https://rebrickable.com/api/v3/lego/minifigs/" +
        (selected as Minifig).set_num +
        "/parts/?key=" +
        "8e442d7f1155bab4074dbff1e76bc680";

    const [getData, { data, error, loading: isLoading }] = useLazyAxios({
        url: URL,
    });
    const { setSelectedMinifig, setParts } = useDispatchAction();
    useEffect(() => {
        if (data && (data as Results).results) {
            setParts((data as Results).results);
        }
        error && setParts(error);
        data && history.push(Paths.order);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error]);

    const selectMinifig = useCallback((minifig: SelectedMinifig) => {
        setSelected(minifig);
    }, []);

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
                        getData();
                        // history.push(Paths.order);
                    }}
                >
                    Proceed to shipment
                </BasicButton>
            </div>
        </div>
    );
};

export default Select;
