/* global IS_PRODUCTION, IS_DEVELOPMENT */

import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker, {Category} from './emoji-picker';
import styles from 'style/css/_root.scss'; // do not remove me

ReactDOM.render(
    <EmojiPicker>
        <Category
            icon={require('./../img/category-icon.svg')}
            sprite={{
                frames: require('./../img/emoji-sprite.json').frames,
                image: require('./../img/emoji-sprite.png')
            }}
            emoji={{
                onClick: evt => {
                    console.log(evt);
                },
                className: 'emoji'
            }}
        />
        <Category
            icon={require('./../img/category-icon.svg')}
            sprite={{
                frames: require('./../img/emoji-sprite.json').frames,
                image: require('./../img/emoji-sprite.png')
            }}
            emoji={{
                onClick: evt => {
                    console.log(evt);
                },
                className: 'emoji'
            }}
        />
        {/* <Category name="not-my-smile" sprite={require('img/emoji-sprite.json')}/>*/}
        {/* <Category name="other-smile" sprite={require('img/emoji-sprite.json')}/>*/}
    </EmojiPicker>,
    document.querySelector('.js-app-wrapper')
);
