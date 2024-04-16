import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import FormField from "./FormField";

import { getSelectedMinifigNumber } from "reduxware/selectors";
import { FORM_ID } from "fixtures";
import { SendOrder } from "types";
import { useMessage } from "hooks";

interface Props {
    sendOrder: SendOrder;
}
export const OrderDetails = (props: Props) => {
    const { sendOrder } = props;
    const minifigSetNumber = useSelector(getSelectedMinifigNumber);
    const refForm = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const showMessage = useMessage();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmit = () => {
        const pack = new FormData(refForm.current as HTMLFormElement);
        if (minifigSetNumber) {
            pack.append("setNumber", minifigSetNumber);
            pack && sendOrder(navigate, showMessage, pack);
        }
    };

    return (
        <>
            <form className="details" id={FORM_ID} onSubmit={handleSubmit(onFormSubmit)} ref={refForm}>
                <h1 className="fromLeft">Shipping details</h1>
                <div className="foo" id="foo"></div>

                <FormField errors={errors} variant="extendable" register={register} name="firstName" />

                <FormField errors={errors} variant="extendable" register={register} name="surName" />

                <FormField errors={errors} variant="regular" register={register} name="phone" />

                <FormField errors={errors} variant="regular" register={register} name="email" />

                <FormField errors={errors} variant="regular" register={register} name="dob" />

                <FormField errors={errors} variant="regular" register={register} name="address" />

                <FormField errors={errors} variant="regular" register={register} name="city" />

                <FormField errors={errors} variant="short" register={register} name="state" />

                <FormField errors={errors} variant="short" register={register} name="zip" />
            </form>
        </>
    );
};
