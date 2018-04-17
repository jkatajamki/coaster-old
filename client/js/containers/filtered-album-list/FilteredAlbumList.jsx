import { connect } from 'react-redux';
import { setAlbumFilter } from '../../actions/AlbumActions';
import Albums from '../../components/albums/Albums';
import stateToProps from '../../utilities/stateToProps';
import {getAlbumsFiltered} from '../../items/AlbumFilters';

const mapDispatchToProps = dispatch => ({
  onAlbumClick: id => dispatch(setAlbumFilter(id))
});

const mapStateToProps = state => ({
  albums: getAlbumsFiltered(state.albums.albums, state.albums.albumFilter)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Albums);
