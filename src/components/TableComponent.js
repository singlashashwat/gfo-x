import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  action: {
    textTransform: "uppercase",
  },
}));

function EnhancedTableHead() {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.title}>Date</TableCell>
        <TableCell className={classes.title}>Action</TableCell>
        <TableCell className={classes.title}>Amount</TableCell>
        <TableCell className={classes.title}>Description</TableCell>
        <TableCell className={classes.title}>From</TableCell>
        <TableCell className={classes.title}>To</TableCell>
      </TableRow>
    </TableHead>
  );
}

const TableComponent = ({ transactions }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <EnhancedTableHead />
            <TableBody>
              {transactions.map((row, index) => {
                return (
                  <TableRow hover key={index}>
                    <TableCell align="left">{row?.date}</TableCell>
                    <TableCell className={classes.action}>
                      {row?.action}
                    </TableCell>
                    <TableCell>{row?.amount}</TableCell>
                    <TableCell>{row?.des}</TableCell>
                    <TableCell>{row?.from}</TableCell>
                    <TableCell>{row?.to}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TableComponent;
