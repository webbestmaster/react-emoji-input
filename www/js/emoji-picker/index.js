export Category from './category';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class EmojiPicker extends Component {
    render() {
        const view = this;
        const {props} = view;
        const {children} = props;

        return <div>
            {children}
        </div>;
    }
}

EmojiPicker.propTypes = {};
