import {statusCodes} from "../../config";

export const isStatusOk = (data: any): boolean => {
  if (data && data?.payload?.status === statusCodes.OK) {
    return true;
  }

  return false;
};
