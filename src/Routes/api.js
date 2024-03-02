import { axiosPrivate } from "./axios";

export const savePledge = async (data) => {
    let res = await axiosPrivate.post("/pledge/save", data);
    return res.data;
}
