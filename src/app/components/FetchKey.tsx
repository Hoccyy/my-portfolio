import dotenv from 'dotenv';
dotenv.config();

export const FetchAPIKey = (): string | undefined => {
    console.log('$30',process.env)
    console.log('$30',process.env.FORM_KEY)
    return process.env.FORM_KEY;
};
