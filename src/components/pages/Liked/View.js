import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import './style.css';

export const Liked = props => (
  <div className="liked_box">
    <PerfectScrollbar>
      <div className="liked_header">
        <div className="liked_header_image" />
        <div className="liked_header_text">
          <div className="liked_header_title">Songs You Liked</div>
          <div className="liked_header_subtext">
            Your heart, hearted these songs!
          </div>
          <div className="liked_header_divider" />
        </div>
      </div>

      <Table className="liked_table">
        <TableHead>
          <TableRow>
            <TableCell classes={{ head: 'table_header' }}> </TableCell>
            <TableCell classes={{ head: 'table_header' }}>TITLE</TableCell>
            <TableCell classes={{ head: 'table_header' }}>ARTIST</TableCell>
            <TableCell classes={{ head: 'table_header' }}>ALBUM</TableCell>
            <TableCell classes={{ head: 'table_header' }}>
              <CalendarTodayIcon />
            </TableCell>
            <TableCell classes={{ head: 'table_header' }}>
              <AccessTimeIcon />
            </TableCell>
            <TableCell classes={{ head: 'table_header' }}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.user.liked.songs.map(song =>
            props.music.songs.map(listSong =>
              listSong.id === song.id ? (
                <TableRow
                  key={song.id}
                  classes={{
                    root:
                      props.selectedTrack.id === listSong.id
                        ? 'table_row activeTrack'
                        : 'table_row',
                  }}
                >
                  <TableCell align="center" classes={{ root: 'table_cell' }}>
                    {props.selectedTrack.id === listSong.id ? (
                      <PauseCircleOutlineIcon
                        style={{ width: '30px', height: '30px' }}
                        className="table_icon"
                        onClick={() => props.playTrack(listSong)}
                      />
                    ) : (
                      <PlayCircleOutlineIcon
                        style={{ width: '30px', height: '30px' }}
                        className="table_icon"
                        onClick={() => props.playTrack(listSong)}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    classes={{
                      root:
                        props.selectedTrack.id === listSong.id
                          ? 'table_cell_active'
                          : 'table_cell',
                    }}
                  >
                    {console.log(props.selectedTrack.id === listSong.id)}
                    {listSong.title}
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        props.selectedTrack.id === listSong.id
                          ? 'table_cell_active'
                          : 'table_cell',
                    }}
                  >
                    <span className="liked_underline">{listSong.artist}</span>
                    {listSong.feat.map(ft => (
                      <span>
                        ,&nbsp;<span className="liked_underline">{ft}</span>
                      </span>
                    ))}
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        props.selectedTrack.id === listSong.id
                          ? 'table_cell_active'
                          : 'table_cell',
                    }}
                  >
                    <span className="liked_underline">{listSong.album}</span>
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        props.selectedTrack.id === listSong.id
                          ? 'table_cell_active'
                          : 'table_cell',
                    }}
                  >
                    {song.date}
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        props.selectedTrack.id === listSong.id
                          ? 'table_cell_active'
                          : 'table_cell',
                    }}
                  >
                    {props.formatTime(listSong.length)}
                  </TableCell>
                  <TableCell classes={{ root: 'table_cell' }}>
                    <FavoriteIcon style={{ color: '#fff' }} />
                  </TableCell>
                </TableRow>
              ) : null
            )
          )}
        </TableBody>
      </Table>
    </PerfectScrollbar>
  </div>
);

export default Liked;
