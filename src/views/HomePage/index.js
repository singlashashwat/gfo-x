import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// React Redux
import { connect } from "react-redux";
import { Grid, Typography, Paper, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputSelect from "../../components/InputSelect";
import TextArea from "../../components/TextArea";
import InputDate from "../../components/InputDate";
import { saveUser } from "../../store/home/actions";
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  heading: {
    paddingTop: "10px",
    marginLeft: "20px",
  },
  container: {
    margin: "20px",
    padding: "20px",
  },
  form: {
    margin: "10px 0",
  },
}));

// Connect states and dispatch to props
const mapState = (state) => ({
  user: state.dataReducer.user,
});

const mapDispatch = {
  saveUser: saveUser,
};

const connector = connect(mapState, mapDispatch);
const HomePage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const body = {
      name,
      password,
      email,
      role,
      description,
      date,
    };
    props.saveUser(body);
    setOpenSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Grid>
      <Typography
        className={classes.heading}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        New User
      </Typography>
      <Paper className={classes.container}>
        <form id="user-modal-form" onSubmit={handleFormOnSubmit}>
          <Grid className={classes.form}>
            <InputText
              value={name}
              label="Name"
              setValue={setName}
              type="text"
            />
          </Grid>

          <Grid className={classes.form}>
            <InputText
              value={email}
              label="Email"
              setValue={setEmail}
              type="email"
            />
          </Grid>

          <Grid className={classes.form}>
            <InputText
              value={password}
              label="Password"
              setValue={setPassword}
              type="password"
            />
          </Grid>

          <Grid className={classes.form}>
            <InputSelect
              label={"Role"}
              list={["Admin", "User", "Maintainer"]}
              value={role}
              setValue={setRole}
            />
          </Grid>

          <Grid className={classes.form}>
            <TextArea value={description} setValue={setDescription} />
          </Grid>

          <Grid className={classes.form}>
            <InputDate label={"Create Date"} value={date} setValue={setDate} />
          </Grid>
        </form>
        <InputButton label={"Create User"} />
      </Paper>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Successfully Created"
        action={action}
      />
    </Grid>
  );
};

export default connector(HomePage);
