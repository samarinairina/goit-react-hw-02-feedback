import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Section.module.scss';

class Section extends Component {
    render() {
        const { title, children } = this.props;

        return (
            <>
                <h2 className={Style.colorText} >{title}</h2>
                {children}
            </>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;