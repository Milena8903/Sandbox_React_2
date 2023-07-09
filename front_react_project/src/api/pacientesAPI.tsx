import axios from "axios";

export const PacienteAPI = axios.create({
  baseURL: "http://localhost:4500",
});