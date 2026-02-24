import { User } from "../core/models/user.model";

export const MOCK_USERS:User[] = [
  {
    id: 1,
    email: "patient@example.com",
    password: "password123",
    role: "PATIENT",
    fullname: "Ahmed Ben Salah"
  },
  {
    id: 2,
    email: "medecin@example.com",
    password: "password456",
    role: "MEDECIN",
    fullname: "Dr. Amira Zouari"
  },
  {
    id: 3,
    email: "admin@example.com",
    password: "password789",
    role: "ADMIN",
    fullname: "Admin User"
  },
  {
    id: 4,
    email: "secretaire@example.com",
    password: "password012",
    role: "SECRETAIRE",
    fullname: "Sécrétaire Dupont"
  }
];