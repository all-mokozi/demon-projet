export interface User {
    id: number;
    email: string;
    password: string;
    role: UserRole
    fullname: string;
}
type UserRole= 'PATIENT' | 'MEDECIN' | 'ADMIN'|'SECRETAIRE';
export interface UserLoginRequest {
    email: string;
    password: string;
}
export interface UserLoginResponse {
    token?: string;
    user: User;
}