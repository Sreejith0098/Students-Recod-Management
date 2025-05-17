import axios from "axios";
import { baseURL } from "./baseURL";

const commonApi = async (reqMethod, reqEndPoint, reqBody) => {
  const reqConfig = {
    method: reqMethod,
    url: baseURL + reqEndPoint,
    data: reqBody,
  };
  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export default commonApi
