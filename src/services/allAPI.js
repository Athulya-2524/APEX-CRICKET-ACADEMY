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
// add history
export const addHistoryAPI = async (history)=>{
    return await commonAPI(`${ServerURL}/history/`,"POST",history)
}
// get history
export const getHistoryAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/history${id}`,"GET",{})
}
// remove history
export const removeHistoryAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/history${id}`,"DELETE",{})
}