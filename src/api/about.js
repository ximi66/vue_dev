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
    url: "/dsc/sys/main-info/syn-log-info",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "post",
    data: param
  });
}

export function matchAllApi(param) {
  return axios({
    url: "/dsc/sys/main-info/match-all",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "post",
    data: param
  });
}

export function attachmentInfoApi(param) {
  return axios({
    url: "/dsc/sys/main-info/attachment-info",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "post",
    data: param
  });
}

export function infoApi(param) {
  return axios({
    url: `/dsc/sys/main-info/table/info/${param.applyNo}/${param.tableInfo}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "post"
  });
}
