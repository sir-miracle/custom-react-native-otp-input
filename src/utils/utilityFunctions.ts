// validate number-only
export const validateNumbers = (value: string) => {
    if (Number.isNaN(Number(value))) {
        return false;
    } else {
        return true;
    }
}