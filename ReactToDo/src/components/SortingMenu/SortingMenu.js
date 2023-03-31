import { TextField, Grid, Box, Typography, Autocomplete } from "@mui/material"
import { useState } from "react"

const SortingMenu = ({tags, sx}) => {
    const [searchName, setSearchName] = useState('');
    const [searchTag, setSearchTag] = useState('');

    function handleSearchName(e) {
        setSearchName(e.target.value)
    }

    function handleSearchTag(e) {
        setSearchTag(e.target.textContent)
    }

    return (
        <Box
            sx={{...sx}}
        >
            <Typography
                variant="h4"
                component="h2"   
            >
                filters
            </Typography>
            <Grid
            container
            flexDirection="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={2}
            >
                <Grid item xs="8">
                    <TextField
                        onChange={(e) => {
                            handleSearchName(e)
                        }}
                        value={searchName}
                        sx={{width: '100%'}}
                        id="name"
                        name="name" 
                        label="Search by name" 
                        variant="standard"
                    >
                    </TextField>
                </Grid>
                <Grid item xs="3">
                        <Autocomplete
                        value={searchTag}
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        onChange={(e) => {
                            handleSearchTag(e)
                        }}
                        options={tags.map((item) => {
                            return item.name
                        })}
                        renderInput={(params) => 
                        <TextField {...params}  label="Sort by tag" />}
                    />
                    {/* <TextField
                            onChange={(e) => {
                                validateError(e)
                                setTag(e.target.value)
                            }}
                            value={''}
                            size="small"
                            sx={{width: '150px'}}
                            id="tag"
                            name="tag"
                            error={errorSelect}
                            select
                            label="Seach by tag"
                            >
                            {tags.map((item) => (
                                <MenuItem
                                key={item.id}
                                a
                                value={item.name}>
                                {item.name}
                                </MenuItem>
                            ))}
                    </TextField> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default SortingMenu 

