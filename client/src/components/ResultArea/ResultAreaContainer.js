import {connect} from 'react-redux';
import { getResultValue} from '../../redux/resultRedux';
import ResultArea from './ResultArea';

const mapStateToProps = (state, props) => ({
    result: getResultValue(state),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultArea);