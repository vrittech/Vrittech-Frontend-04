export const returnTotal = ({ price, discountPercentage }) => {
    return returnToFixed(price * (1 - discountPercentage * 0.01));
};

export const returnDiscountAmount = ({ price, discountPercentage }) => {
    return returnToFixed(price * discountPercentage * 0.01);
};

const returnToFixed = (data) => {
    return data.toFixed(2);
};