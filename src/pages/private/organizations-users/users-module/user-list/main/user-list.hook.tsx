import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadData } from "./user-list.action";

function useUserHook() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    return {
      userList: state.organizations.userList,
      organization:
        state.organizations.organizationList.selectedOrganization.organization,
    };
  });

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch, state.organization]);

  return {
    state,
  };
}

export default useUserHook;
