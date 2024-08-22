import { clientDataService } from "../config/axios";

export const loginEndpoint = async (data) => {
  return await clientDataService({
    url: `/login`,
    method: "POST",
    data: data,
  });
};
