import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "components/ui-libraries";

import { apiGetAllSuppliers, apiPutSupplier } from "services/supplier.service";

const useStyles = makeStyles({
  container: {
    width: "30%",
    maxHeight: 440,
  },
});

const Suppliers = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [state, setState] = useState({
    isFirstLoad: true,
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    const fetchApi = async () => {
      let data: any = [];
      try {
        data = await apiGetAllSuppliers();
      } catch (e) {
        console.log("Nguyen C: index.tsx, F: fetchApi, N: e ", e);
      }

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isFirstLoad: false,
        data,
      }));
    };

    fetchApi();
  }, []);

  const handleRowChange = async (row: any, rowIndex: number) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      await apiPutSupplier({ ...row, active: row.active === 1 ? 0 : 1 });

      setState((prevState: any) => ({
        ...prevState,
        isLoading: false,
        data: state.data.map((d: any, i: number) =>
          rowIndex === i ? { ...d, active: d.active === 1 ? 0 : 1 } : d
        ),
      }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));

      console.log("Nguyen C: index.tsx, F: handleRowChange, N: e ", e);
    }
  };

  return (
    <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("name")}</TableCell>
              <TableCell align="right">{t("show")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.data.map((row: any, i: number) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    checked={!!row.active}
                    onChange={() => handleRowChange(row, i)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Suppliers;
