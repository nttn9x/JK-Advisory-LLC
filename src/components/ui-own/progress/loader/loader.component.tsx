import React, { useEffect, useState } from "react";

import styles from "./loader.module.scss";

import { Typography } from "components/ui-libraries";

interface IProp {
  message?: string;
}

const Loader: React.FC<IProp> = React.memo(({ message }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    let cancel = false;

    setTimeout(() => {
      if (!cancel) {
        setShow(true);
      }
    }, 10);

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div className={styles.container}>
      {show && (
        <>
          <div className={styles.loader}></div>
          <Typography variant={"h5"} className={styles.message}>
            {message}
          </Typography>
        </>
      )}
    </div>
  );
});

export default Loader;
