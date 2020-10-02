import { useEffect, useState } from "react";
import { getUser } from "utils/auth.util";

function useLayoutHook(history: any) {
  const [show, setShow] = useState<boolean>(false);
  const user = getUser();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return {
    show,
    user
  };
}

export default useLayoutHook;
