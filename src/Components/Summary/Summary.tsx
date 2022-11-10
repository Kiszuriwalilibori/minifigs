import { SummaryHeader, Parts, BasicButton } from "components";

import formID from "fixtures";

const Summary = () => {
    return (
        <div className="summary">
            <SummaryHeader />
            <Parts />
            <BasicButton className="button uppercased" type="submit" form={formID}>
                Submit
            </BasicButton>
        </div>
    );
};
export default Summary;
