import {connect} from 'react-redux';
import { getInputValue, setInputValue} from '../../redux/inputRedux';
import InputArea from './InputArea';

const mapStateToProps = (state, props) => ({
    input: getInputValue(state),
});

const mapDispatchToProps = dispatch => ({
    setInputValue: input => dispatch(setInputValue(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);