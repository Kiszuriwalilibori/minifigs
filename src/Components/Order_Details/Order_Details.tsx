import { RegisterOptions, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import formID from "fixtures";
import { createRedirect } from "functions";

import { SendOrder, RedirectType } from "types";
import { useMemo, useRef } from "react";

type Messages = { [key in keyof RegisterOptions]?: string };

const messages: Messages = {
    minLength: "Minimal length not reached, should be at least ",
    maxLength: "Max length exceeded ",
    required: "This field is required ",
    pattern: "Text does not meet country pattern ",
};

type Fields = "firstName" | "surName" | "phone" | "email" | "dob" | "address" | "city" | "state" | "zip";

type Validator = { [key in keyof RegisterOptions]?: any };
type Validators = {
    [key in Fields]?: Validator;
};
const crits = {
    firstName: { minLength: 2, maxLength: 45, pattern: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/, required: true },
    surName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    },
    phone: {
        required: true,
        pattern: /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/,
    },
    email: {
        required: true,
        pattern:
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    },
    dob: {
        required: false,
        pattern: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
    },
    address: {
        required: true,
        pattern: /[A-Za-z0-9'\.\-\s\,]/,
    },
    city: {
        required: true,
        minLength: 2,
        pattern: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    },
    state: {
        required: true,
        minLength: 2,
        pattern: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    },
    zip: {
        pattern: /^[0-9]{2}-[0-9]{3}/,
        required: true,
    },
};
const validators: Validators = {
    firstName: { ...crits.firstName },
    surName: { ...crits.surName },
    phone: { ...crits.phone },
    email: { ...crits.email },
    dob: { ...crits.dob },
    address: { ...crits.address },
    city: { ...crits.city },
    state: { ...crits.state },
    zip: { ...crits.zip },
};

interface Props {
    sendOrder: SendOrder;
    setNumber: string;
}
export const OrderDetails = (props: Props) => {
    const { sendOrder, setNumber } = props;
    const history = useHistory();
    const refForm = useRef<HTMLFormElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect: RedirectType = useMemo(createRedirect(history), []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmit = () => {
        const pack = new FormData(refForm.current as HTMLFormElement);
        pack.append("setNumber", setNumber);
        pack && sendOrder(redirect, pack);
    };

    return (
        <>
            <form className="details" id={formID} onSubmit={handleSubmit(onFormSubmit)} ref={refForm}>
                <h2 className="fromLeft">Shipping details</h2>
                <div className="foo" id="foo"></div>

                {/**Name */}

                <div className="form-item extendable">
                    <label>Name</label>
                    <input type="text" {...register("firstName", validators.firstName)} />
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
                    <label>Surname</label>
                    <input type="text" {...register("surName", validators.surName)} />
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
                    <label>Phone Number</label>
                    <input placeholder="Mobile or regular Polish phone with country code like 048 669086566" type="text" {...register("phone", validators.phone)} />
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
                    <label>Email</label>
                    <input type="text" {...register("email", validators.email)} />
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
                    <label>Date of Birth</label>
                    <input placeholder="Date in yyyy-mm-dd or yyyy-m-dd format " type="text" {...register("dob", validators.dob)} />
                    {errors.dob && errors.dob.type === "pattern" && <span>{messages.pattern}</span>}
                </div>

                <div className="form-item full-width">
                    <label>Address</label>
                    <input type="text" {...register("address", validators.address)} />
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
                    <label>City</label>
                    <input type="text" {...register("city", validators.city)} />
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
                    <label>State</label>
                    <input type="text" {...register("state", validators.state)} />
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
                    <label>Zip Code</label>
                    <input type="text" placeholder=" zip code in format xx-xxx" {...register("zip", validators.zip)} />
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
