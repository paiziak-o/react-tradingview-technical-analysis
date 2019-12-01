# react-tradingview-technical-analysis

React component for rendering the <https://www.tradingview.com/widget/technical-analysis/>

### Using the components
                 
###### 1) From the command line inside of your project:
`npm install --save react-tradingview-technical-analysis`

###### 2) Import the component to your project
`import TechnicalAnalysis from 'react-tradingview-technical-analysis';`

###### 3) Use as if it was any other component
```javascript
<TechnicalAnalysis
	symbol={'ETH'} 
/>
```

### Props

Name  | Type | Default Value | Values
------------- | ------------- | -------------  | -------------
autoSize  | bool | `false` | `true`, `false`
colorTheme  | enum | `light` | `light`, `dark`
containerId  | string | `tradingview-widget-container` | Any Container Id
height  | number | `450` | Any Number
interval  | enum | `1m` | `1m`, `5m`, `15m`, `1h`, `4h`, `1W`, `1M`
isTransparent  | bool | `false` | `true`, `false`
locale  | string | `en` | Any Locale Code
showIntervalTabs  | bool | `true` | `true`, `false`
symbol  | string | Required Prop | Any Symbol
width  | number | 425 |Any Number


### Exmaples:

###### Example with props:

```
import TechnicalAnalysis from 'react-tradingview-technical-analysis';

render() {
...
<TechnicalAnalysis
	symbol={'ETH'} 
    interval={TechnicalAnalysis.THEMES.ONE_HOUR}
    autoSize={true}
/>
...
```


```
import TechnicalAnalysis from 'react-tradingview-technical-analysis';

render() {
...
<TechnicalAnalysis
	symbol={'ETH'} 
    colorTheme ={TechnicalAnalysis.THEMES.DARK}
/>
...
```

###### Example with exported constants:
```
import TechnicalAnalysis, { THEMES, INTERVALS} from 'react-tradingview-technical-analysis';

render() {
...
<TechnicalAnalysis
	symbol={'ETH'} 
    colorTheme ={THEMES.DARK}
    interval={INTERVALS.ONE_WEEK}
/>
...
```
