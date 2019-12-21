import React from 'react';
import Styles from './ShareArticle.module.scss';

import Brand from '../Brand/Details';

const ShareTwitter = props => {
    const text = `${props.articleTitle} on @${Brand.twitter} - ${Brand.domain}${props.href} %23${Brand.name.toLowerCase()}`;
    return (
        <a className={Styles.Link} target='_blank' rel='noopener noreferrer' href={`https://twitter.com/intent/tweet?text=${text}`} >
            <i style={{color: '#1DA1F2'}} className='fa fa-twitter'></i>
        </a>
    )
}

export { ShareTwitter };