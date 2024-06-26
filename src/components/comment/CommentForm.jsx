import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SEND_COMMENT } from "../../graphql/mutation";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, text, email, slug },
  });
  console.log(data);
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      toast.success("کامنت با موفقیت ثبت شد و منتظر تایید میباشد", {
        position: "top-center",
      });
    } else {
      toast.warn("لطفا تمام فیلد هارو پر کن", { position: "top-center" });
    }
  };
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2} width="100%">
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2} width="100%">
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2} width="100%">
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contaiend" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button onClick={sendHandler} variant="contained">
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
