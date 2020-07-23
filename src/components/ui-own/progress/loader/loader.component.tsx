import React, { useEffect, useState } from "react";

import styles from "./loader.module.scss";

const Circular: React.FC = () => {
  const [isChrome, setChrome] = useState<boolean>(false);

  useEffect(() => {
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    setChrome(isChrome);
  }, []);

  if (isChrome) {
    return (
      <div className={styles.container}>
        <div className={styles["loader--chrome"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles["loader--others"]}>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Circular;
