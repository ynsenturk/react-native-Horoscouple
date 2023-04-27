import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
  },
  titleContainer: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 13,
  },
  input: {
    paddingLeft: 8,
    fontWeight: '500',
    flex: 7,
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    flex: 1,
  },
});
