import { RegisterOptions } from "react-hook-form";

type Messages = { [key in keyof RegisterOptions]?: string };

export const messages: Messages = {
    minLength: "Minimal length not reached, should be at least ",
    maxLength: "Max length exceeded ",
    required: "This field is required ",
    pattern: "Text does not meet country pattern ",
};

type Fields = "firstName" | "surName" | "phone" | "email" | "dob" | "address" | "city" | "state" | "zip";

type Validator = { [key in keyof RegisterOptions]?: RegisterOptions[key] };
type Validators = {
    [key in Fields]?: Validator;
};

const SURNAME_REGEX = /^([ \u00c0-\u01ffa-zA-Z'-])+$/;

export const crits = {
    firstName: { minLength: 2, maxLength: 45, pattern: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/, required: true },
    surName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/,
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
export const validators: Validators = {
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
