const priceParser = (price) => {
    const str = String(price);
    const secondPart = str.slice(-3);
    const firstPart = str.slice(0, str.length - secondPart.length);
    return `${firstPart} ${secondPart} руб.`;
};

export { priceParser };
