export const createTask = (title) => {
    return {
        id: crypto.randomUUID(), // Eşsiz ID üretimi
        title: title,
        isCompleted: false,
        isUrgent: false,
        createdAt: new Date().toISOString()
    };
};
