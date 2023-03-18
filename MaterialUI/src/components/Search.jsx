import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
                type='search' 
                value={value} 
                onChange={onChange}
                fullWidth
                label="search"
                variant="standard" 
                sx={{
                    mb: '1.5rem'
                }}
            />;
};

export default Search;