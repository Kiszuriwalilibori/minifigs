import { validationResult } from "pages/Order_Page/utils/validationUtils";

interface Props {
    result: validationResult;
}
export const ErrorMessage = (props: Props) => {
    const { result } = props;
    if (!result) return null;

    return result.isError && <span>{result.errorMessage}</span>;
};

export default ErrorMessage;
