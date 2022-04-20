"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
const randomName = () => {
    const names = ["Dwight", "Jim", "Michael", "Pam"];
    return names[Math.floor(Math.random() * names.length)];
};
exports.randomName = randomName;
