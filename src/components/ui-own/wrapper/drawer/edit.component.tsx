import React from "react";

import SkeletonDetailComponent from "components/ui-own/skeleton-detail/skeleton-detail.component";
import { Drawer } from "components/ui-libraries";

import { ContainerDiv } from "../container";

const DrawerEdit: React.FC<any> = ({ isLoading, children, ...props }) => {
  return (
    <Drawer anchor="right" {...props}>
      <ContainerDiv padding>
        {isLoading && <SkeletonDetailComponent />}
        {!isLoading && children}
      </ContainerDiv>
    </Drawer>
  );
};

export default DrawerEdit;
