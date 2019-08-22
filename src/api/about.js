import axios from "@/axios/axiosConfig";

export function synLogInfoApi(param) {
  return axios({
    url: "/api/data",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "post",
    data: param
  });
}

