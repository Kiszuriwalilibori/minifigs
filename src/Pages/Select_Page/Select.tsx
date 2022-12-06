import uuid from "react-uuid";
import isEqual from "lodash/isEqual";

import { useLazyAxios } from "use-axios-client";
import { after, isEmpty } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import useDispatchAction from "hooks/useDispatchAction";

import { Minifig, Results, SelectedMinifig } from "types/types";
import { Image } from "components";
import { BasicButton } from "components";
import { Paths } from "routes/paths";

interface Props {
    minifigs: Minifig[];
}
const Select = (props: Props) => {
    const { minifigs } = props;
    const history = useHistory();
    const [selected, setSelected] = useState<SelectedMinifig>({});
    const refImages = useRef<HTMLDivElement>(null);
    const URL = "https://rebrickable.com/api/v3/lego/minifigs/" + (selected as Minifig).set_num + "/parts/?key=" + process.env.REACT_APP_MINIFIGS_KEY;
    const [initiateFetchParts, { data, error, loading: isLoading }] = useLazyAxios({
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

    const onLoad = after(minifigs.length, () => {
        refImages.current?.classList.add("active");
    });

    return (
        <div className="select">
            <div className="select__content-box">
                <h2>Choose your minifig</h2>
                <div className="images" ref={refImages}>
                    {minifigs &&
                        minifigs.map(fig => {
                            return fig && <Image key={uuid()} minifig={fig} clickHandler={selectMinifig} isSelected={isEqual(fig, selected)} loadHandler={onLoad} />;
                        })}
                </div>
                <BasicButton
                    disabled={isEmpty(selected)}
                    className="button uppercased"
                    onClick={e => {
                        e.stopPropagation();
                        setSelectedMinifig(selected);
                        initiateFetchParts();
                    }}
                >
                    Proceed to shipment
                </BasicButton>
            </div>
        </div>
    );
};

export default Select;
