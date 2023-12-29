import { BasicButton } from "components";
import { Parts } from "../../components";
import SummaryHeader from "./Summary_Header";
import { FORM_ID } from "fixtures";

const Summary = () => {
    return (
        <div className="summary">
            <SummaryHeader />
            <Parts />
            <BasicButton className="button uppercased" type="submit" form={FORM_ID}>
                Submit
            </BasicButton>
        </div>
    );
};
export default Summary;
