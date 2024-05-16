import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const KEY = process.env.KEY || 'prueba123' 
export const EXPIRATION = process.env.EXPIRATION || '30m' 