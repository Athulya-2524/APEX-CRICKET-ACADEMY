import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

// add API
export const addApplicationAPI = async (application)=>{
    return await commonAPI(`${ServerURL}/applications`,"POST",application)
}
// get API
export const getApplicationAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/applications/${id}`,"GET",{})
}
// update
export const updateApplicationAPI = async (id,application)=>{
    return await commonAPI(`${ServerURL}/applications/${id}`,"PUT",application)
}
