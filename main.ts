import { generateUniqueTempPassword } from ".";

const { email, date } = require("./input.json");
const result = generateUniqueTempPassword(email, date);
console.log({ email, date, result });
