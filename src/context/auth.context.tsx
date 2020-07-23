import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from "react";
//
// import { withRouter } from "react-router";
//
// import { setToken, removeToken, getUser } from "utils/auth.util";
// import { isCallRefreshToken } from "utils/auth.util";
//
// import useMessage from "context/message.context";
//
// import { ROUTES } from "constants/navigation";
// import { API_ROOT, TIMEOUT, HTTP_CODE } from "constants/common";
//
// import { ProgressLoader } from "components/ui-own";
//
// interface IAuthContext {
//   isAuth: boolean;
//   authData: any;
//   onLogin: any;
//   onLogout: any;
// }
//
// export const AuthDataContext = createContext<IAuthContext>({
//   isAuth: false,
//   authData: null,
//   onLogin: null,
//   onLogout: null
// });
//
// const AuthDataProvider = ({ children, history, ...props }: any) => {
//   const [state, setState] = useState({
//     authData: getUser(),
//     isFirstLoad: true,
//     isChecking: true
//   });
//   const { pushMsgDefault } = useMessage();
//
//   const onLogin = useCallback((res: any) => {
//     setToken(res.token);
//     setState((preState: any) => ({ ...preState, authData: getUser() }));
//   }, []);
//
//   const onLogout = useCallback(() => {
//     setState((preState: any) => ({ ...preState, authData: null }));
//     removeToken();
//   }, []);
//
//   const autoCheckToken = useCallback(
//     function autoCheckToken(isFirstLoad?: boolean) {
//       const pathname = history.location.pathname;
//
//       const { isRefresh, isExpired, token } = isCallRefreshToken();
//
//       if (isExpired || !token) {
//         setState((preState: any) => ({
//           ...preState,
//           isFirstLoad: false
//         }));
//
//         if (pathname !== "/forgot-password" && pathname !== "/password-reset") {
//           history.push({
//             pathname: ROUTES.Login,
//             state: { from: pathname }
//           });
//         }
//         return;
//       }
//
//       if (isRefresh || isFirstLoad) {
//         fetch(`${API_ROOT}/auth/refresh`, {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//           }
//         })
//           .then(res => {
//             if (res.status === HTTP_CODE.Unauthorized) {
//               throw new Error(
//                 "Your session is expired! You need to login again"
//               );
//             }
//             return res.json();
//           })
//           .then(function(res) {
//             setToken(res.data.token);
//             setState((preState: any) => ({
//               ...preState,
//               isFirstLoad: false,
//               authData: getUser()
//             }));
//           })
//           .catch(function(error: any) {
//             setState((preState: any) => ({
//               ...preState,
//               authData: null
//             }));
//             removeToken();
//
//             pushMsgDefault(error.message, "info");
//
//             history.push({
//               pathname: ROUTES.Login,
//               state: { from: pathname }
//             });
//           });
//       }
//     },
//     [history, pushMsgDefault]
//   );
//
//   useEffect(() => {
//     if (state.isFirstLoad) {
//       autoCheckToken(state.isFirstLoad);
//     }
//   }, [state.isFirstLoad, autoCheckToken]);
//
//   useEffect(() => {
//     let intervalId: any = 0;
//
//     if (state.authData) {
//       intervalId = setInterval(autoCheckToken, TIMEOUT.IntervalToken);
//     }
//
//     return function clear() {
//       return clearInterval(intervalId);
//     };
//   }, [state.authData, autoCheckToken]);
//
//   return (
//     <AuthDataContext.Provider
//       value={{
//         isAuth: state.authData ? true : false,
//         authData: state.authData,
//         onLogin,
//         onLogout
//       }}
//       {...props}
//     >
//       {state.isFirstLoad ? <ProgressLoader /> : children}
//     </AuthDataContext.Provider>
//   );
// };
//
// export const useAuthDataContext = () =>
//   useContext<IAuthContext>(AuthDataContext);
//
// export default withRouter(AuthDataProvider);
