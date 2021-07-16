import React, { Component } from 'react';
import propTypes from 'prop-types';
import Style from './CreateFeedback.module.scss';

class CreateFeedback extends Component {
    render() {
        const setFeedBack = this.props.setFeedBack;
        return (
            <div className={Style.wrapper}>
                <button
                    className={`${Style.button} ${Style.good}`}
                    type="button"
                    name="good"
                    onClick={setFeedBack}
                >
                    Good
        </button>
                <button
                    className={`${Style.button} ${Style.neutral}`}
                    type="button"
                    name="neutral"
                    onClick={setFeedBack}
                >
                    Neutral
        </button>
                <button
                    className={`${Style.button} ${Style.bad}`}
                    type="button"
                    name="bad"
                    onClick={setFeedBack}
                >
                    Bad
        </button>
            </div>
        );
    }
}
CreateFeedback.propTypes = {
    setFeedBack: propTypes.func.isRequired,
};
export default CreateFeedback;