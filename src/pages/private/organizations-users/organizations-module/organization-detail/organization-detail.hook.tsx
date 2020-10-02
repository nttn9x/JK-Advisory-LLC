import { useSelector } from "react-redux";

function useOrganizationDetailHook() {
  const { organization } = useSelector((state: any) => {
    return state.organizations.organizationList.selectedOrganization;
  });

  return {
    state: { organization },
  };
}

export default useOrganizationDetailHook;
