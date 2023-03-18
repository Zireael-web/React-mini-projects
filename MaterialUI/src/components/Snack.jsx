import { Alert, Snackbar } from '@mui/material'

function Snack({isOpen, handleClose}) {
  return (
    <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={1000}
    >
        <Alert
            severity='success'
        >Товар добавлен в корзину!</Alert>
    </Snackbar>
  )
}

export default Snack