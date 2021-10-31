import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// React Redux
import { connect } from "react-redux";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputNumber from "../../components/InputNumber";
import InputSelect from "../../components/InputSelect";
import TextArea from "../../components/TextArea";
import InputDate from "../../components/InputDate";
import { saveFilter } from "../../store/home/actions";

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
  filter: state.dataReducer.filter,
});

const mapDispatch = {
  saveFilter: saveFilter,
};

const connector = connect(mapState, mapDispatch);
const TransferPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");
  const [accountFrom, setAccountFrom] = useState("");
  const [accountTo, setAccountTo] = useState("");

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const body = {
      amount: amount,
      date: date,
      currency: currency,
      description: description,
      accountFrom: accountFrom,
      accountTo: accountTo,
    };
    console.log("transferData", body);
    history.push("/")
  };

  useEffect(() => {
    // if user type in browser "http://localhost:3000/transfer"
    if (props?.filter === "accounts") {
      props?.saveFilter("transfer");
    }
  }, [props]);

  return (
    <Grid>
      <Typography
        className={classes.heading}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        New Transfer
      </Typography>
      <Paper className={classes.container}>
        <form id="user-modal-form" onSubmit={handleFormOnSubmit}>
          <Grid className={classes.form}>
            <InputNumber
              label={"Amount"}
              setAmount={setAmount}
              amount={amount}
            />
          </Grid>

          <Grid className={classes.form}>
            <InputSelect
              label={"Currency"}
              list={["USD", "HKD", "SGD"]}
              value={currency}
              setValue={setCurrency}
            />
          </Grid>

          <Grid className={classes.form}>
            <TextArea value={description} setValue={setDescription} />
          </Grid>

          <Grid className={classes.form}>
            <InputSelect
              label={"From"}
              list={[
                "012-3456",
                "034-5678",
                "056-7890",
                "078-9012",
                "090-1234",
              ]}
              value={accountFrom}
              setValue={setAccountFrom}
            />
          </Grid>

          <Grid className={classes.form}>
            <InputNumber
              label={"To"}
              setAmount={setAccountTo}
              amount={accountTo}
            />
          </Grid>

          <Grid className={classes.form}>
            <InputDate label={"Date"} value={date} setValue={setDate} />
          </Grid>
        </form>
        <Button
          color="primary"
          type="submit"
          form="user-modal-form"
          variant="outlined"
        >
          Transfer
        </Button>
      </Paper>
    </Grid>
  );
};

export default connector(TransferPage);
