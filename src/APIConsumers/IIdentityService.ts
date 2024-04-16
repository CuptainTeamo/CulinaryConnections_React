import { RegisterDTO, LoginDTO } from "../Models/IdentityDTO/IdentityTypes";

interface IIdentityService{
    login(credentials: LoginDTO): Promise<any>;
    register(userDetails: RegisterDTO): Promise<any>;

}

export default IIdentityService