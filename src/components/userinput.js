import { Button, FormControl, InputLabel, MenuItem, TextField, Select} from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import { Box } from "@mui/system";
import { useState } from "react";

function UserInput(){

    
    const [uploadHidden, setUploadHidden] = useState(true);
    const [updateHidden, setUpdateHidden] = useState(true);
    const [deleteHidden, setDeleteHidden] = useState(true);

    function handleUpload(){
        setUploadHidden(false);
    }

    function handleUpdate(){
        setUpdateHidden(false);
    }

    function handleDelete(){
        setDeleteHidden(false);
    }

    function handleCancel(){
        setUploadHidden(true);
        setUpdateHidden(true);
        setDeleteHidden(true);
    }


    return(
        <div className="input-container">
            <Button onClick={handleUpload} variant="contained">Create</Button>
            <Button onClick={handleUpdate} variant="outlined">Update</Button>
            <Button onClick={handleDelete} variant="outlined" color="error">Remove</Button>
            {!uploadHidden ? <UploadBookContainer handleClick={handleCancel} /> : null}
            {!updateHidden ? <UploadBookContainer handleClick={handleCancel} /> : null}
            {!deleteHidden ? <DeleteBookContainer handleClick={handleCancel} /> : null }
            
        </div>
    )
}

//props -> tells us if it's a new book or updating current book
function UploadBookContainer({handleClick}){

    return(
        <div className="upload-container">
            <Box component="form" autoComplete="off">
                <div className="upload-info-container">
                    <TextField id="outlined-required" label="Title"></TextField>
                    <TextField id="outlined-required" label="Type"></TextField>
                    <TextField id="outlined-required" label="Genre"></TextField>
                    <TextField id="outlined-required" label="Type"></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="upload-completed">Completed?</InputLabel>
                        <Select id="upload-select-container" label="Completed?">
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="upload-button-container">
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                    <Button onClick={handleClick} variant="contained" color="error">Cancel</Button>
                </div>
                
            </Box>
        </div>
    )
}

function DeleteBookContainer({handleClick}){

    return(
        <div className="delete-container">
            <div className="delete-info-container">
                <TextField id="outlined-basic" label="Enter Book ID" variant="outlined"></TextField>
            </div>
            <div className="delete-button-container">
                <Button variant="contained">Remove</Button>
                <Button onClick={handleClick} variant="contained" color="error">Cancel</Button>
            </div>
        </div>
    )
}





export default UserInput;