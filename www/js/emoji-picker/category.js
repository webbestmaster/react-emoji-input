import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Emoji from './emoji';

export default class Category extends Component {
    render() {
        const view = this;
        const {props} = view;
        const {
            sprite,
            emoji = {}
        } = props;
        const {image, frames} = sprite;

        return <div>
            {Object
                .keys(frames)
                .map(frame =>
                    <Emoji key={frame}
                           frame={frames[frame].frame}
                           image={image}
                           emoji={Object.assign({}, emoji, {'data-id': frame}) }
                    />)}
        </div>;
    }
}

Category.propTypes = {
    sprite: PropTypes.shape({
        image: PropTypes.string.isRequired,
        frames: PropTypes.object.isRequired
    }).isRequired,
    icon: PropTypes.string.isRequired,
    emoji: PropTypes.object
};


