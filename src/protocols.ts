export type humorAnalysis = {
    id: string | number,
    date: string,
    hour: string,
    mood: string,
    activities: string
};

export type humorPost = Omit<humorAnalysis, "id">;

export type humorUpdate = Omit<humorAnalysis, "id" | "date" | "hour">;