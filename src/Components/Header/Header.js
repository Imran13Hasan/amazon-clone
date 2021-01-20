import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    return (
        <div className="header">
            <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello User
                    </span>
                    <span className="header-optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header-optionBasket">
                    {/* <ShoppingBasketIcon /> */}
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    {/* <span className="header-optionLineTwo header-basketCount">0</span> */}
                </div>
            </div>
        </div>

    );
};

export default Header;