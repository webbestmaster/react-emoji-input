import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Emoji extends PureComponent {
    render() {
        const view = this;
        const {props} = view;
        const {
            frame,
            image,
            emoji
        } = props;

        return <div
            style={{
                backgroundImage: 'url(' + image + ')',
                width: frame.w + 'px',
                height: frame.h + 'px',
                backgroundPosition: frame.x + 'px ' + frame.y + 'px'
            }}
            {...emoji}
        />;
    }
}

Emoji.propTypes = {
    image: PropTypes.string.isRequired,
    frame: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        w: PropTypes.number.isRequired,
        h: PropTypes.number.isRequired
    }),
    emoji: PropTypes.object
};
