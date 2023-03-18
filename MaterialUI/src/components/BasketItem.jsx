import { Close } from '@mui/icons-material';
import { ListItem, IconButton, Typography} from '@mui/material'

const BasketItem = ({removeFromOrder, id, price, name, quantity}) => {
    return (
        <ListItem className='list-group-item'>
            <Typography
                variant='body1'
            >    
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;