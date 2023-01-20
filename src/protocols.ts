export type humorAnalysis = {
    date: string,
    hour: string,
    mood: string,
    activities: string
};

export type humorUpdate = Omit<humorAnalysis, "date" | "hour">;