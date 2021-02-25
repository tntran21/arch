export const getSize = (...ptSizes) => {
    return ptSizes.map((ptSize) => `calc(var(--ss) / var(--ts) * ${ptSize}px)`).join(" ");
};

export const getSizeAuto = (...ptSizes) => {
    return ptSizes.map((ptSize) => `calc(${ptSize} / var(--ts) * 100vw)`).join(" ");
};
