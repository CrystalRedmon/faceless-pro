import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  messageList: {
    maxHeight: 300,
    overflow: "auto"
  },
  form: {
    display: "flex",
    alignItems: "flex-end"
  },
  textField: {
    marginRight: theme.spacing(1)
  }
}));

function Message() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const jobMessageID = useSelector(
    store => store.candidateReducer.jobMessage
  );
  console.log("JOB message:", jobMessageID);

  // Use a ref to store the interval ID
  const intervalId = useRef();

  useEffect(() => {
    dispatch({ type: "FETCH_MESSAGES", payload: jobMessageID });

    // Start the interval
    intervalId.current = setInterval(() => {
      dispatch({ type: "FETCH_MESSAGES", payload: jobMessageID });
    }, 500);

    // Return a cleanup function to cancel the interval when the component unmounts
    return () => clearInterval(intervalId.current);
  }, [jobMessageID]);

  const messageList = useSelector(
    store => store.candidateReducer.messageList
  );
  console.log("messagelist", messageList);

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit", message);
    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        jobId:jobMessageID,
        message: message
      }
    });
    setMessage(""); // Reset the value of message to an empty string
  }
  return (
    <Container className={classes.root}>
      <Typography variant="h4">{message.title} - {message.company_name}</Typography>
      <Paper className={classes.messageList}>
        <List>
          {messageList.map(message => {
            return (
              <ListItem
                key={message.id}
                justify={message.is_from_candidate ? "left" : "right"}>
                <ListItemText
                  primary={message.content}
                  secondary={
                    <>
                      {new Date(message.time).toLocaleString()}
                      {message.is_from_candidate ? (
                        <span> - {message.random_identifier}</span>
                      ) : (
                        <span> - {message.company_name}</span>
                      )}
                    </>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Type your message"
          variant="outlined"
          value={message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
  
  
  
  
}

export default Message;