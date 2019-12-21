import React from 'react';
import Styles from './SuggestArticles.module.scss';

export default () => (
    <div className={Styles.Suggest}>
        <p>
            Do you have any topic in web development which you would love to be written about?<br/>
            If yes, kindly <a href='https://forms.gle/5Npd7mdWJwiqpnreA' target='_blank' rel='noopener noreferrer' title='Suggest articles on this form'>fill this form</a>.
        </p>
    </div>
)