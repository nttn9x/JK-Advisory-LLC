import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { ContainerDiv } from "components/ui-own/index";
import { Typography, Skeleton } from "components/ui-libraries";

import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  AutoSizer,
} from "react-virtualized";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
    title: {
      paddingBottom: theme.spacing(1.5),
    },
    news: {
      flex: 1,
    },
    row: {
      paddingRight: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
    },
    rowBody: {
      cursor: "pointer",
      padding: theme.spacing(1.5),
      borderRadius: theme.shape.borderRadius * 2,
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    rowTitle: {
      fontWeight: 500,
      marginBottom: theme.spacing(1.5),
    },
  })
);

function truncate(input: string) {
  if (input && input.length > 210) return input.substring(0, 210) + "...";
  else return input;
}

const News: React.FC<any> = ({
  isLoading,
  title,
  data,
  onClick,
  classes,
  renderRow,
}) => {
  const styles = useStyles();
  const [cache] = useState(
    new CellMeasurerCache({
      minHeight: 50,
      fixedWidth: true,
    })
  );

  useEffect(() => {
    if (isLoading) {
      cache.clearAll();
    }
  }, [cache, isLoading]);

  const _renderRow = ({ index, key, parent, style }: any) => {
    const row = data[index];

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        {({ measure, registerChild }: any) => {
          const body = renderRow ? (
            renderRow(row)
          ) : (
            <>
              <Typography className={styles.rowTitle} variant="subtitle1">
                {row.title}
              </Typography>
              <Typography>{truncate(row.summarize_text)}</Typography>
            </>
          );

          return (
            <div
              onLoad={measure}
              ref={registerChild}
              style={style}
              className={classnames(styles.row, classes.row)}
            >
              <ContainerDiv
                className={classnames(styles.rowBody, classes.rowBody)}
                onClick={() => {
                  if (onClick) onClick(row);
                }}
              >
                {body}
              </ContainerDiv>
            </div>
          );
        }}
      </CellMeasurer>
    );
  };

  return (
    <ContainerDiv className={classnames(styles.container, classes.container)}>
      <Typography
        variant="h6"
        className={classnames(styles.title, classes.title)}
      >
        {title}
      </Typography>
      <div className={styles.news}>
        <AutoSizer>
          {({ height, width }: any) => {
            if (isLoading) {
              return (
                <div style={{ height, width, padding: 12 }}>
                  <Skeleton
                    variant="rect"
                    width={"100%"}
                    height={100}
                    style={{ marginBottom: 12, borderRadius: 8 }}
                  />
                  <Skeleton
                    variant="rect"
                    width={"100%"}
                    height={100}
                    style={{ borderRadius: 8 }}
                  />
                </div>
              );
            }

            return (
              <List
                rowCount={data.length}
                className="scrollbar"
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                height={height}
                width={width}
                rowRenderer={_renderRow}
              />
            );
          }}
        </AutoSizer>
      </div>
    </ContainerDiv>
  );
};

News.defaultProps = {
  data: [],
  classes: {},
};

export default News;
