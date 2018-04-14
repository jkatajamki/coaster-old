import connect from 'react-redux';
import { setAlbumFilter } from '../../actions/AlbumActions';
import Link from '../../components/link/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.albumFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setAlbumFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
