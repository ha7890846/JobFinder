import axiosInstance from "../Interceptor/AxiosInterceptor"; // adjust the path

const loginUser = async (login: any) => {
  return axiosInstance
    .post("/auth/login", login)
    .then((result: any) => result.data);
};

export { loginUser };
