import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';
export default function styleConstructor(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        dot: {
            width: 4,
            height: 8,
            marginTop: 2,
            marginHorizontal: 1,
            borderRadius: 2,
            opacity: 0,
            ...appStyle.dotStyle
        },
        visibleDot: {
            opacity: 1,
            backgroundColor: appStyle.dotColor
        },
        selectedDot: {
            backgroundColor: appStyle.selectedDotColor
        },
        disabledDot: {
            backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
        },
        inactiveDot: {
            backgroundColor: appStyle.inactiveDotColor || appStyle.dotColor
        },
        todayDot: {
            backgroundColor: appStyle.todayDotColor || appStyle.dotColor
        },
        // @ts-expect-error
        ...(theme['stylesheet.dot'] || {})
    });
}
