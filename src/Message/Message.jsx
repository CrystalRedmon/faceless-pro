
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
  import { useParams } from "react-router-dom";
  import { Grid } from "@material-ui/core";
  import Box from "@material-ui/core/Box";
  import Fab from '@material-ui/core/Fab';
  import SendIcon from '@material-ui/icons/Send';

  
  const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),
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
      const params = useParams()
  
    // Use a ref to store the interval ID
    const intervalId = useRef();
  
    useEffect(() => {
      dispatch({ type:"FETCH_MESSAGES", payload: `${params.id}`});
      console.log('params.id is:',`${params.id}`)
  
      // Start the interval
      intervalId.current = setInterval(() => {
        dispatch({ type: "FETCH_MESSAGES", payload: params.id});
      }, 500);
  
      // Return a cleanup function to cancel the interval when the component unmounts
      return () => clearInterval(intervalId.current);
    },[]);
  
    const messageList = useSelector(
      store => store.candidateReducer.messageList
    );
    console.log("messageList", messageList);
  
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
          jobId:`${params.id}`,
          message: message
        }
      });
      setMessage(""); // Reset the value of message to an empty string
    }
    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.headBG}>
              <Box display="flex" alignItems="center" p={1}>
              <Box p={1} flexGrow={1}>
                {/* added a back button, Mohamed */}
                <Button
                  variant='contained'
                  onClick={() => { window.history.back() }}
                >
                  back
                </Button>
                {messageList.length != 0 &&
                  <Typography variant="h5" className="header-message">
                    Chat with {messageList[0].company_name} for {messageList[0].title} position
                  </Typography>
                }
                </Box>
                {/* <Box p={1}>
                  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                </Box> */}
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.chatSection}>
              <Paper className={classes.messageArea}>
                <List>
                  {messageList.map(message => {
                    return (
                      <ListItem
                        key={message.id}
                        align={
                          message.is_from_candidate ? "left" : "right"
                        }
                      >
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
              <Box p={1} className={classes.form}>
                <TextField
                  className={classes.textField}
                  label="Type your message"
                  variant="outlined"
                  value={message}
                  onChange={handleChange}
                  fullWidth
                />
                <Fab
                  type="submit"
                  variant="round"
                  color="primary"
                  onClick={handleSubmit}
                >
                  <SendIcon />
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </div>
      );
    
  
  }
  
  export default Message;
