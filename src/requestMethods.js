import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjVjZDFkNTFhNmVjZGJjZTdkNDNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Nzc2ODY5OSwiZXhwIjoxNjY4MDI3ODk5fQ.IS5XYD2FocI6dtcSjFo7-p-AqHJEmKLZT6ezKRM3C_4"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token:`Bearer ${TOKEN}`}
})