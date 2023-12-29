import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { getSelectedMinifigNumber } from "reduxware/selectors";

import { FORM_ID } from "fixtures";
import { SendOrder } from "types";
import { useMessage } from "hooks";
import { crits, messages, validators } from "./utils";

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
        pack.append("setNumber", minifigSetNumber);
        pack && sendOrder(navigate, showMessage, pack);
    };

    return (
        <>
            <form className="details" id={FORM_ID} onSubmit={handleSubmit(onFormSubmit)} ref={refForm}>
                <h1 className="fromLeft">Shipping details</h1>
                <div className="foo" id="foo"></div>
                <div className="form-item extendable">
                    <label className="required" htmlFor="firstName">
                        Name
                    </label>
                    <input type="text" {...register("firstName", validators.firstName)} id="firstName" />
                    {errors.firstName && errors.firstName.type === "required" && <span>{messages.required}</span>}
                    {errors.firstName && errors.firstName.type === "minLength" && (
                        <span>
                            {messages.minLength}
                            {crits.firstName.minLength}
                        </span>
                    )}
                    {errors.firstName && errors.firstName.type === "maxLength" && (
                        <span>
                            {messages.maxLength}
                            {crits.firstName.maxLength}
                        </span>
                    )}
                    {errors.firstName && errors.firstName.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                {/**Surname */}

                <div className="form-item extendable">
                    <label className="required" htmlFor="Surname">
                        Surname
                    </label>
                    <input id="Surname" type="text" {...register("surName", validators.surName)} />
                    {errors.surName && errors.surName.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.surName.required}
                        </span>
                    )}
                    {errors.surName && errors.surName.type === "minLength" && (
                        <span>
                            {messages.minLength}
                            {crits.surName.minLength}
                        </span>
                    )}
                    {errors.surName && errors.surName.type === "maxLength" && (
                        <span>
                            {messages.maxLength}
                            {crits.surName.maxLength}
                        </span>
                    )}
                    {errors.surName && errors.surName.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                {/**Phone */}

                <div className="form-item full-width">
                    <label className="required" htmlFor="Phone">
                        Phone Number
                    </label>
                    <input id="Phone" placeholder="Mobile or regular Polish phone with country code like 048 669086566" type="text" {...register("phone", validators.phone)} />
                    {errors.phone && errors.phone.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.phone.required}
                        </span>
                    )}
                    {errors.phone && errors.phone.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                {/**Email */}

                <div className="form-item full-width">
                    <label className="required" htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="text" {...register("email", validators.email)} />
                    {errors.email && errors.email.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.email.required}
                        </span>
                    )}
                    {errors.email && errors.email.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                {/**Date of Birth */}

                <div className="form-item full-width">
                    <label htmlFor="DoB">Date of Birth</label>
                    <input id="DoB" placeholder="Date in yyyy-mm-dd or yyyy-m-dd format " type="text" {...register("dob", validators.dob)} />
                    {errors.dob && errors.dob.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                <div className="form-item full-width">
                    <label className="required" htmlFor="address">
                        Address
                    </label>
                    <input type="text" id="address" {...register("address", validators.address)} />
                    {errors.address && errors.address.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.address.required}
                        </span>
                    )}
                    {errors.address && errors.address.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                {/**City */}

                <div className="form-item full-width">
                    <label className="required" htmlFor="city">
                        City
                    </label>
                    <input type="text" id="city" {...register("city", validators.city)} />
                    {errors.city && errors.city.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.state.required}
                        </span>
                    )}
                    {errors.city && errors.city.type === "pattern" && <span>{messages.pattern}</span>}
                    {errors.city && errors.city.type === "minLength" && (
                        <span>
                            {messages.minLength}
                            {crits.city.minLength}
                        </span>
                    )}
                </div>

                {/**State */}

                <div className="form-item">
                    <label className="required" htmlFor="state">
                        State
                    </label>
                    <input type="text" id="state" {...register("state", validators.state)} />
                    {errors.state && errors.state.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.state.required}
                        </span>
                    )}
                    {errors.state && errors.state.type === "pattern" && <span>{messages.pattern}</span>}
                    {errors.state && errors.state.type === "minLength" && (
                        <span>
                            {messages.minLength}
                            {crits.state.minLength}
                        </span>
                    )}
                </div>

                {/**Zip Code */}

                <div className="form-item">
                    <label className="required" htmlFor="ZipCode">
                        Zip Code
                    </label>
                    <input id="ZipCode" type="text" placeholder=" zip code in format xx-xxx" {...register("zip", validators.zip)} />
                    {errors.zip && errors.zip.type === "required" && (
                        <span>
                            {messages.required}
                            {crits.zip.required}
                        </span>
                    )}
                    {errors.zip && errors.zip.type === "pattern" && <span>{messages.pattern}</span>}
                </div>
            </form>
        </>
    );
};
