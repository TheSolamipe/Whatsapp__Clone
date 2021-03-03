import {StyleSheet} from 'react-native';
import Colors  from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        zIndex: 100,
        right: 10,
        bottom: 20,
        borderRadius: 25,
    }
})

export default styles;