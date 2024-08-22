import { clientDataService } from "../config/axios";

export const signUpEndpoint = async (data) =>{
  return await clientDataService({
    url: `/signup`,
    method: 'POST',
    data: data,
  });
}
