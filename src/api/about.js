import axios from "@/axios/axiosConfig";

export function detailApi(param) {
  return axios({
    url: `/dsc/sys/main-info/detail/${param.applyNo}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "get"
  });
}

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

