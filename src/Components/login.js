import React, {useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom'

export default function Login() {
const [isRedirect, setIsRedirect] = useState(false);



    function login(event){
        var userName = document.getElementById("userName").value;
        var passWord = document.getElementById("passWord").value;
        if(userName==="Sanjay" && passWord==="thimi"){
            setIsRedirect(true);

        }else{
            setIsRedirect(false);
            alert("login fail");
        }
        // var credentail ={
        //     username:userName,
        //     password:passWord
        // };

        // alert("credential : "+JSON.stringify(credentail));
    }
  return (
     
    <div style={{width:"20%", margin:"0 auto", marginTop:"100px"}}>
 {isRedirect?<Redirect to='/home' />:null}
     <Card >
      <CardActionArea>
      <CardContent>
      <TextField id="userName" fullWidth label="UserName" />
      <TextField id="passWord" fullWidth label="Password" />
      
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={login}>
          login
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}


