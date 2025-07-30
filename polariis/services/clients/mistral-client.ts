import { Mistral } from '@mistralai/mistralai'

const { MISTRAL_API_KEY: apiKey } = process.env

export const mistralClient = new Mistral({ apiKey })
