import { clientDataService } from "../config/axios";

export const me = async () => {
  return await clientDataService({
    method: "GET",
    url: `/me`,
  });
};
