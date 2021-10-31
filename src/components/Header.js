import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleButtons from "./ToogleButtons";
// React Redux
import { connect } from "react-redux";
import { saveFilter } from "../store/home/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const mapState = (state) => ({
  filter: state.dataReducer.filter,
});

const mapDispatch = {
  saveFilter: saveFilter,
};

const connector = connect(mapState, mapDispatch);
const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleAlignment = (event, newAlignment) => {
    props?.saveFilter(newAlignment);
    if (newAlignment === "accounts") {
      history.push("/");
    } else if (newAlignment === "transfer") {
      history.push("/transfer");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <ToggleButtons
            alignment={props?.filter}
            handleAlignment={handleAlignment}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connector(Header);
