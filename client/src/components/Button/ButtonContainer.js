import {connect} from 'react-redux';
import { getInputValue} from '../../redux/inputRedux';
import { classifyFromAPI} from '../../redux/resultRedux';
import Button from './Button';

const mapStateToProps = (state, props) => ({
    input: getInputValue(state),
});

const mapDispatchToProps = dispatch => ({
    classifyFromAPI: body => dispatch(classifyFromAPI(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);