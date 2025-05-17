import commonApi from "./commonApi";

export const createStudent =async(reqBody) => {
  return await commonApi('post','/studentDetails',reqBody)
}

export const getStudent =async () => {
    return await commonApi('get','/studentDetails',"")
}