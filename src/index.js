import React from 'react';
import PropTypes from 'prop-types';

export const INTERVALS = {
  ONE_MINUTE: '1m',
  FIVE_MINUTES: '5m',
  FIFTEEN_MINUTES: '15m',
  ONE_HOUR: '1h',
  FOUR_HOURS: '4h',
  ONE_WEEK: '1W',
  ONE_MONTH: '1M',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

class TechnicalAnalysis extends React.Component {
  static INTERVALS = INTERVALS;

  static THEMES = THEMES;

  static propTypes = {
    containerId: PropTypes.string,
    interval: PropTypes.oneOf(Object.values(INTERVALS)),
    width: PropTypes.number,
    height: PropTypes.number,
    colorTheme: PropTypes.oneOf(Object.values(THEMES)),
    isTransparent: PropTypes.bool,
    showIntervalTabs: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
    locale: PropTypes.string,
    autoSize: PropTypes.bool,
  };

  static defaultProps = {
    containerId: 'tradingview-widget-container',      
    interval: INTERVALS.ONE_MINUTE,
    width: 425,
    height: 450,
    colorTheme: THEMES.LIGHT,
    isTransparent: false,
    showIntervalTabs: true,
    locale: 'en',
    autoSize: false,
  };
  
  componentDidMount() {
    this.script = null;

    this.appendElement();
  }

  appendElement = () => {
    if (this.script) {
      var elem = document.querySelector('#data');
      elem.parentNode.removeChild(elem);
    }
    this.script = document.createElement('script');
    this.script.id = 'data';
    this.script.type = 'text/javascript';
    this.script.async = true;
    this.script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';

    const config = { ...this.props, };
    if (config.autoSize) {
      autoSize.width = '100%';
      autoSize.height = '100%';
    }

    this.script.text = JSON.stringify(config)

    document.getElementsByClassName(this.props.containerId)[0].appendChild(this.script);
  }

  render() {
    const { containerId, } = this.props;
    return (
      <div className={containerId}></div>
    );
  }
}

export default TechnicalAnalysis;
