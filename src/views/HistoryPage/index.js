import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TableComponent from "../../components/TableComponent";
import { Transactions } from "../../constant";

const useStyles = makeStyles(() => ({
  heading: {
    paddingTop: "10px",
    marginLeft: "13px",
  },
  root: {
    padding: "20px",
  },
}));

const HistoryPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography variant="h6" gutterBottom component="div">
        History
      </Typography>
      {Transactions.length > 0 && (
        <TableComponent transactions={Transactions} />
      )}
    </Grid>
  );
};

export default HistoryPage;
