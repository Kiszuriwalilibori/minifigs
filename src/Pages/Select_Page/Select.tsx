import uuid from "react-uuid";
import isEqual from "lodash/isEqual";

import { after, isEmpty } from "lodash";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatchAction } from "hooks";
import { Minifig, SelectedMinifig } from "types";
import { MinifigCard } from "./components";
import { BasicButton } from "components";
import { Paths } from "routes/paths";

interface Props {
    minifigs: Minifig[];
}
const Select = (props: Props) => {
    const { minifigs } = props;
    const [selected, setSelected] = useState<SelectedMinifig>({});
    const refImages = useRef<HTMLDivElement>(null);
    const history = useNavigate();
    const { setSelectedMinifigId } = useDispatchAction();

    const selectMinifig = useCallback((minifig: SelectedMinifig) => {
        setSelected(minifig);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onLoad = useCallback(
        after(minifigs.length, () => {
            refImages.current?.classList.add("active");
        }),
        []
    );

    const handleConfirmSelection = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            setSelectedMinifigId((selected as Minifig).set_num);
            history(Paths.order);
        },
        [selected]
    );

    return (
        <main className="select">
            <div className="select__content-box">
                <h1>Choose your minifig</h1>
                <div className="images" ref={refImages}>
                    {minifigs &&
                        minifigs.map(fig => {
                            const wasSelected = isEqual(fig, selected);
                            return fig && <MinifigCard key={uuid()} minifig={fig} clickHandler={selectMinifig} isSelected={wasSelected} loadHandler={onLoad} />;
                        })}
                </div>
                <BasicButton disabled={isEmpty(selected)} className="button uppercased" onClick={handleConfirmSelection}>
                    Proceed to shipment
                </BasicButton>
            </div>
        </main>
    );
};

export default Select;
