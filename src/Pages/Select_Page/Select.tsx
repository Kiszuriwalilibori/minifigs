import uuid from "react-uuid";
import isEqual from "lodash/isEqual";

import { after, isEmpty } from "lodash";
import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import useDispatchAction from "hooks/useDispatchAction";

import { Minifig, SelectedMinifig } from "types/types";
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

    const { setSelectedMinifig } = useDispatchAction();

    const selectMinifig = useCallback((minifig: SelectedMinifig) => {
        setSelected(minifig);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
