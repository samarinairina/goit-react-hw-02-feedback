import React, { Component } from 'react';
import propTypes from 'prop-types';
import Style from './Statistics.module.scss';

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <>
                <p className={Style.colorText}>Good: {good}</p>
                <p className={Style.colorText}>Neutral:{neutral}</p>
                <p className={Style.colorText}>Bad:{bad}</p>
                <p className={Style.colorText} >Total: {total()}</p>
                <p
                    className={
                        positivePercentage() > 50
                            ? `${Style.description} ${Style.good}`
                            : `${Style.description} ${Style.bad}`
                    }
                >
                    Positive feedback: {positivePercentage()} %
        </p>
            </>
        );
    }
}
Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.func,
    positivePercentage: propTypes.func,
};
export default Statistics;