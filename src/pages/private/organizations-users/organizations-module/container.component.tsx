import React from "react";

import { List, ListSearch as Search } from "components/ui-own";
import OrganizationRow from "./organization-item/card";

import useOrganizationHook from "./organization-list/organization-list.hook";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    list: {
      flex: 1,
    },
  })
);

const OrganizationList: React.FC<any> = () => {
  const {
    state: { isLoading, rowCount, organizations },
    actions,
  } = useOrganizationHook();
  const { t } = useTranslation();
  const styles = useStyles();

  const _rowRenderer = ({ key, ...rowProps }: any) => {
    const org = organizations[rowProps.index];
    return (
      <OrganizationRow key={key} {...rowProps} data={org} actions={actions} />
    );
  };

  return (
    <div className={styles.container}>
      <Search
        title={t("organizations")}
        onAdd={actions.createNew}
        onSearch={actions.searchData}
      />
      <List
        isLoading={isLoading}
        className={styles.list}
        listProps={{
          data: organizations,
          rowCount,
          rowHeight: 90,
          rowRenderer: _rowRenderer,
        }}
      />
    </div>
  );
};

export default OrganizationList;
