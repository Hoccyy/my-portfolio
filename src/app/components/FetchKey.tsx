import dotenv from 'dotenv';
dotenv.config();

export const FetchAPIKey = (): string | undefined => {
    return process.env.FORM_KEY;
};
