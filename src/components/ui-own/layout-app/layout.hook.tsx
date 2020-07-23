import { useEffect, useState } from "react";

// import { useAuthDataContext } from "context/auth.context";

import { setStatusSideBar, getStatusSideBar } from "utils/localstorage";

function useLayoutHook(isMobile: boolean, history: any) {
  const [menuEl, setMenuEl] = useState<any>();
  const [isShow, setShow] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(
    isMobile ? false : getStatusSideBar()
  );

  // const { isAuth, authData, onLogout } = useAuthDataContext();
  let isAuth = true;

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  function onToggle(event: React.MouseEvent<HTMLElement>) {
    const newValue = !isOpen;
    setOpen(newValue);

    if (!isMobile) {
      setStatusSideBar(newValue);
    } else {
      setMenuEl(event.currentTarget);
    }
  }

  function handleCloseMenu() {
    setMenuEl(null);
  }

  return {
    isShow,
    menuEl,
    isAuth,
    isOpen,
    // authData,
    // onLogout,
    onToggle,
    handleCloseMenu,
  };
}

export default useLayoutHook;
