import Joi from "joi";

export const humorAnalysisPost = Joi.object({
    date: Joi.string().min(8).required(),
    hour: Joi.string().min(5).required(),
    mood: Joi.valid("radiante", "bem", "mais ou menos", "mal").required(),
    activities: Joi.string()
});