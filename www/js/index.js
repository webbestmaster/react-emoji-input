/* global IS_PRODUCTION, IS_DEVELOPMENT */

import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from './emoji-picker';
import styles from 'style/css/_root.scss'; // do not remove me

ReactDOM.render(
    <EmojiPicker />,
    document.querySelector('.js-app-wrapper')
);
