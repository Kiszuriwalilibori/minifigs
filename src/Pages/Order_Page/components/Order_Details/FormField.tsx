import { labels, placeholders, validators } from "pages/Order_Page/utils/validationUtils";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { ErrorMessage } from "@hookform/error-message";

interface Props {
    errors: Partial<
        FieldErrorsImpl<{
            [x: string]: any;
        }>
    >;

    name: string;
    register: UseFormRegister<FieldValues>;
    variant: "short" | "regular" | "extendable";
    isRequired: boolean;
}

export const FormField = (props: Props) => {
    const { errors, name, register, variant, isRequired } = props;

    let cls: string;

    switch (variant) {
        case "extendable":
            cls = "form-item extendable";
            break;
        case "regular":
            cls = "form-item full-width";
            break;
        case "short":
            cls = "form-item";
            break;
        default:
            cls = "form-item full-width";
    }

    return (
        <div className={cls}>
            <label className={isRequired ? "form-item__label required" : "form-item__label"} htmlFor={name}>
                {labels[name]}
            </label>
            <input id={name} type="text" placeholder={placeholders[name] || ""} {...register(name, validators[name])} />
            <ErrorMessage className="error-message" errors={errors} name={name} as="span" />
        </div>
    );
};

export default FormField;

/** label classname required prawdopodobnie do wyrzucenia */
