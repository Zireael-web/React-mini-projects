import { TextField, Grid, Box, Typography, Autocomplete } from "@mui/material"
import { useEffect, useState } from "react"

const SortingMenu = ({tags, sx, handleCurTag, handleCurName}) => {
    const [searchName, setSearchName] = useState('');
    const [searchTag, setSearchTag] = useState('');

    useEffect(() => {
        handleCurTag(searchTag)
    }, [searchTag])

    useEffect(() => {
        handleCurName(searchName)
    }, [searchName])

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
                            handleCurTag(searchTag)
                        }}
                        options={tags.map((item) => {
                            return item.name
                        })}
                        renderInput={(params) => 
                        <TextField {...params}  label="Sort by tag" />}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SortingMenu 

