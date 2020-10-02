import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadData, selectOrganization } from "./organization-list.action";
import { showEditPopup } from "../organization-item/organizaiton-item.action";

function useOrganizationHook() {
  const dispatch = useDispatch();
  const state = useSelector(
    (state: any) => state.organizations.organizationList
  );
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const onRowClick = (index: number, organization: any) => {
    dispatch(selectOrganization(index, organization));
  };

  const searchData = ({ textSearch }: any) => {
    dispatch(loadData({ name: textSearch }));
  };

  function createNew(e: any) {
    dispatch(showEditPopup());
  }

  return {
    state,
    actions: { onRowClick, searchData, createNew },
  };
}

export default useOrganizationHook;
