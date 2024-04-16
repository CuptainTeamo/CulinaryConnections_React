// IdentityManager.ts
import axios from "axios";
import IIdentityService from "./IIdentityService";
import urls from "../Data/URL";
import { LoginDTO, RegisterDTO } from "../Models/IdentityDTO/IdentityTypes";

class IdentityManager implements IIdentityService {
    login(dto: LoginDTO): Promise<any> {
        return axios.post(urls.identity.Login, dto)
            .then(response => {
                // Optionally save the token to localStorage or handle it as needed
                localStorage.setItem('jwt_token', response.data.token);
                return response.data;
            })
            .catch(error => {
                console.error("Login error:", error);
                throw error;
            });
    }

    register(dto: RegisterDTO): Promise<any> {
        return axios.post(urls.identity.Register, dto)
            .then(response => {
                // Handle registration response, e.g., navigate to login or auto-login
                return response.data;
            })
            .catch(error => {
                console.error("Registration error:", error);
                throw error;
            });
    }
}

export default IdentityManager;
