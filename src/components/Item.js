import React from 'react';
import './Item.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from './common/Button';
import Footer from './Footer';

const Item = ({ backgroundImg, title, desc, first, leftBtnTxt, rightBtnTxt, oneBtn }) => {
    return (
        <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="item_container">
                <div className="title">
                    {title}
                </div>
                <p>{desc}</p>
            </div>

            <div className="button">
                <Button text={leftBtnTxt} />
                {oneBtn ? "" : <Button text={rightBtnTxt} rightBtn />}
            </div>

            {first &&
                <div className="item_img">
                    <ExpandMoreIcon />
                </div>
            }
            {oneBtn &&
                <Footer />
            }



        </div>

    );
};

export default Item;