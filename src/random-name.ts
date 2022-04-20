export const randomName = (): string => {
	const names: string[] = ["Dwight", "Jim", "Michael", "Pam"];
	return names[Math.floor(Math.random() * names.length)];
};
