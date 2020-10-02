import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { AutoSizer, List, Size } from "react-virtualized";

import ListRowEmpty from "./list-empty.component";

import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: "flex",
      height: "100%",
    },
    listNoBorder: {
      "overflow-x": "hidden !important",
      "&::-webkit-scrollbar": {
        borderRight: "none !important",
        borderRadius: 8,
      },
      "&:hover::-webkit-scrollbar": {
        backgroundColor: "none",
      },
    },
  })
);

const ListRows: React.FC<any> = ({
  isLoading,
  className,
  listProps,
  actions,
}) => {
  const classOwn = useStyles();

  return (
    <div
      className={classNames(classOwn.list, {
        [className]: className && className.length > 0,
      })}
    >
      <AutoSizer>
        {(sizeProps: Size) => {
          if (isLoading) {
            return (
              <ListRowEmpty rowHeight={listProps.rowHeight} {...sizeProps} />
            );
          }
          return (
            <List
              className={classOwn.listNoBorder}
              {...sizeProps}
              {...listProps}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

ListRows.defaultProps = {
  actions: {},
  listProps: {},
};

export default ListRows;
