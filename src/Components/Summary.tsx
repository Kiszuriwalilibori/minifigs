import { SummaryMain, Parts, BasicButton } from "Components";

//interface Props {}
const Summary = () => {
    return (
        <div className="summary">
            <SummaryMain />
            <Parts />
            <BasicButton className="button uppercased">Submit</BasicButton>
        </div>
    );
};
export default Summary;
