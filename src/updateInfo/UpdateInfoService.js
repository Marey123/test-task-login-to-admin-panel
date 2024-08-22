import { clientDataService } from "../config/axios";

export const updateInfoEndpoint = async (data) =>{
  return await clientDataService({
    url: `/update`,
    method: 'POST',
    data: data,
  });
}
