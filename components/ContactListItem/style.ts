import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    midSection: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 50
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    status: {
        fontSize: 16,
        color: 'grey',
    }
});

export default styles;