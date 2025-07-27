import { Mistral } from '@mistralai/mistralai'

const { MISTRAL_API_KEY: apiKey } = process.env

export const client = new Mistral({ apiKey })
