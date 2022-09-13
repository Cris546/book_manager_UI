import { Button, FormControl, InputLabel, MenuItem, TextField, Select} from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import { Box } from "@mui/system";

function UserInput(){
    return(
        <div className="input-container">
            <Button variant="contained">Create</Button>
            <Button variant="outlined">Update</Button>
            <Button variant="outlined" color="error">Remove</Button>
            <UploadBookContainer />
        </div>
    )
}

//props -> tells us if it's a new book or updating current book
function UploadBookContainer(){

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
                </div>
            </Box>
        </div>
    )
}



export default UserInput;