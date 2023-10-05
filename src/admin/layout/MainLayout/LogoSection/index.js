import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import {Box, ButtonBase} from '@mui/material';

// project imports
import { MENU_OPEN } from '../../../store/actions';
import logo from '../../../assets/images/logo-admin.png'
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase style={{width:"100%"}} disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to=''>
      <Box style={{margin:"0 auto",width:"100%",height: { xs: '50px' }}}>
        <img src={logo} alt='logo-etucamer' style={{
          objectFit:'contain',
          objectPosition:"center",
          width:"100%",
          height: '100%'
        }}/>
      </Box>
    </ButtonBase>
  );
};

export default LogoSection;
