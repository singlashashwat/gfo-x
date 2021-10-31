import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "underline",
  },
  container: {
    listStyleType: "none !important",
  },
}));

const ListComponents = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        key={item?.number}
        role={undefined}
        dense
        classes={{ container: classes.container }}
        button
      >
        <ListItemText
          primary={item?.account}
          classes={{ primary: classes.root }}
        />
        <ListItemSecondaryAction classes={{ root: classes.root }}>
          {item?.number}
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListComponents;
