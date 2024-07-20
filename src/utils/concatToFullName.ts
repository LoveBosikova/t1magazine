function concatToFullName ({firstName, lastName} : {firstName?: string, lastName?: string}) {
    if (!firstName && !lastName) {
        return ''
    }

    if (lastName && !firstName) {
        return lastName;
    }

    if (!lastName && firstName) {
        return firstName;
    }

    if (lastName && firstName) {
        return `${firstName} ${lastName}`;
    }
}

export default concatToFullName;