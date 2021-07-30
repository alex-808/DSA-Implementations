const isPowerOfTwo = function (n: number): boolean {
    // n - 1 serves as a mask, when combine with n via '&'

    // ex: 10 & 01 = 00
    // ex: 11 & 01 = 01

    // a power of two will result in a 0, a non-power of two in a non-zero
    if (!n) return false;
    return !(n & (n - 1));
};

const countOnes = function (n: number): number {
    return 1;
};
