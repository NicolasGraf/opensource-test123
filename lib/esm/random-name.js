export const randomName = () => {
    const names = ["Dwight", "Jim", "Michael", "Pam"];
    return names[Math.floor(Math.random() * names.length)];
};
