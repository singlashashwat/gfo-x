import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListComponents from "../../components/ListComponents";
import { AccountInfo } from "../../constant";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  toogle: {
    textAlign: "center",
    margin: "20px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="h6" gutterBottom component="div">
        Accounts
      </Typography>
      <Paper>
        {AccountInfo.length > 0 &&
          AccountInfo.map((item, index) => (
            <Link to="/history" key={index}>
              <ListComponents key={index} item={item} />
            </Link>
          ))}
      </Paper>
    </Grid>
  );
};

export default Home;
