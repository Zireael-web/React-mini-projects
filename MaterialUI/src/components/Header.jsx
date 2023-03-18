import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"

function Header({handleCart, orderLen}) {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography
                variant='h6'
                component="span"
                // style={{flexGrow: 1}} MUI 4 syntax
                sx={{flexGrow: 1}}
            >
                MUI Shop Test
            </Typography>
            <IconButton
                color="inherit"
                onClick={handleCart}    
            >
                <Badge
                    color="secondary"
                    badgeContent={orderLen}
                >
                    <ShoppingBasket />
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header