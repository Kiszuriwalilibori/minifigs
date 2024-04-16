import { RegisterOptions } from "react-hook-form";

export const inputFields = ["firstName", "surName", "phone", "email", "dob", "address", "city", "state", "zip"];
export type Fields = (typeof inputFields)[number];
export type InputFields = typeof inputFields;
export type KeysOfRegisterOptions = keyof RegisterOptions;
export interface validationResult {
    isError: Boolean;
    errorMessage: string;
}

export type Messages = { [key in KeysOfRegisterOptions]?: string };

export const messages: Messages = {
    minLength: "Minimal length not reached, should be at least ",
    maxLength: "Max length exceeded ",
    required: "This field is required ",
    pattern: "Text does not meet country pattern ",
};
export const placeholders: { [key in Fields]?: string } = {
    phone: "Mobile or regular Polish phone with country code like 048 669086566",
    dob: "Date in yyyy-mm-dd or yyyy-m-dd format",
    zip: "zip code in format xx-xxx",
};
export const labels: { [key in Fields]: string } = {
    firstName: "Name",
    surName: "Surname",
    address: "Address",
    zip: "Zip Code",
    dob: "Date of Birth",
    phone: "Phone Number",
    email: "E-mail",
    city: "City",
    state: "State",
};
const FIRSTNAME_MIN_LENGTH = 2;
const SURNAME_MIN_LENGTH = 2;
const FIRSTNAME_MAX_LENGTH = 45;
const SURNAME_MAX_LENGTH = 45;
const PATTERN = "String does not satisfy the pattern: ";
const STATE_MIN_LENGTH = 2;
const CITY_MIN_LENGTH = 2;
const REQUIRED = "This field is required";

const regex = {
    address: /[A-Za-z0-9'\.\-\s\,]/,
    city: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    dob: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    firstName: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    state: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
    surName: /^([ \u00c0-\u01ffa-zA-Z'-])+$/,
    phone: /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/,
    zip: /^[0-9]{2}-[0-9]{3}/,
};

export const validators: { [key in Fields]?: Partial<Record<KeysOfRegisterOptions, any>> } = {
    firstName: {
        minLength: { value: FIRSTNAME_MIN_LENGTH, message: `This input requests not less then ${FIRSTNAME_MIN_LENGTH} chars` },
        maxLength: { value: FIRSTNAME_MAX_LENGTH, message: `This input exceed length of ${FIRSTNAME_MAX_LENGTH} chars` },
        pattern: { value: regex.firstName, message: `${PATTERN}${regex.firstName}` },
        required: { value: true, message: REQUIRED },
    },
    surName: {
        required: { value: true, message: REQUIRED },
        minLength: { value: SURNAME_MIN_LENGTH, message: `This input requests not less then ${SURNAME_MIN_LENGTH} chars` },
        maxLength: { value: SURNAME_MAX_LENGTH, message: `This input exceed length of ${SURNAME_MAX_LENGTH} chars` },
        pattern: { value: regex.surName, message: `${PATTERN}${regex.surName}` },
    },
    phone: {
        required: { value: true, message: REQUIRED },
        pattern: { value: regex.phone, message: `${PATTERN}${regex.surName}` },
    },
    email: {
        required: { value: true, message: REQUIRED },
        pattern: { value: regex.email, message: `${PATTERN}${regex.email}` },
    },
    dob: {
        required: { value: false, message: REQUIRED },
        pattern: { value: regex.dob, message: `${PATTERN}${regex.dob}` },
    },
    address: {
        required: { value: true, message: REQUIRED },
        pattern: { value: regex.address, message: `${PATTERN}${regex.address}` },
    },
    city: {
        required: { value: true, message: REQUIRED },
        minLength: { value: STATE_MIN_LENGTH, message: `This input requests not less then ${CITY_MIN_LENGTH} chars` },
        pattern: { value: regex.city, message: `${PATTERN}${regex.city}` },
    },
    state: {
        required: { value: true, message: REQUIRED },
        minLength: { value: STATE_MIN_LENGTH, message: `This input requests not less then ${STATE_MIN_LENGTH} chars` },
        pattern: { value: regex.state, message: `${PATTERN}${regex.state}` },
    },
    zip: {
        pattern: { value: regex.zip, message: `${PATTERN}${regex.zip}` },
        required: { value: true, message: REQUIRED },
    },
};

// export type Validator = { [key in KeysOfRegisterOptions]?: RegisterOptions[key] };
