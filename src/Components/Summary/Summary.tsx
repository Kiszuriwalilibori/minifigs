import { SummaryMain, Parts, BasicButton } from "Components";

import formID from "fixtures";

const Summary = () => {
    return (
        <div className="summary">
            <SummaryMain />
            <Parts />
            <BasicButton className="button uppercased" type="submit" form={formID}>
                Submit
            </BasicButton>
        </div>
    );
};
export default Summary;
