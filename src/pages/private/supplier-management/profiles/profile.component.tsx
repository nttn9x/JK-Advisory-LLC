import React, { useEffect, useCallback, useState } from "react";

import { apiGetProfile } from "services/profile.service";

const Profile: React.FC<any> = ({ name }) => {
  const [localComp, setLocalComp] = useState({
    data: [],
    isLoading: false,
    isFirstLoad: true,
  });
  console.log(
    "Nguyen C: profile.component.tsx, F: Profile, N: localComp ",
    localComp
  );

  const fetchMyAPI = useCallback(async (name) => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any;
    try {
      data = await apiGetProfile({ name });
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }
    console.log("Nguyen C: profile.component.tsx, F: data, N:  ", data);
    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, []);

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchMyAPI(name).then();
  }, [name, fetchMyAPI]);

  return <div></div>;
};

export default Profile;
