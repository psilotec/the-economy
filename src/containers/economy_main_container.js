import { connect } from 'react-redux';
import EconomyMain from '../components/economy_main';

const mapStateToProps = (state, ownProps) => {
    return {
        // someState: state.someState,
    };
};

const mapDispatchToProps = {
    // firstAction,
};

const EcononmyMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EconomyMain);

export default EcononmyMainContainer;