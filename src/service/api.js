import service from "./httpIntercept";
let apiFuns = {
    changePassword(data) {
        return service({
            url: "/api/changePassword",
            method: "post",
            data
        });
    },
};
export default {
    ...apiFuns,
};
