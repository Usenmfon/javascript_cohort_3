export function add(...numbers) {
    return numbers.reduce((acc, sum) => acc + sum);
}