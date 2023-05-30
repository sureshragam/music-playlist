import styled from 'styled-components'

export const MusicPlaylistContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  color: white;
  font-family: 'Roboto';
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 40%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const MusicPlaylistContent = styled.div`
  height: 60%;
  padding: 20px 40px;
  overflow-y: auto;
`
export const Heading = styled.h1`
  font-size: ${props => (props.banner ? '50px' : '30px')};
  margin-bottom: 0px;
  margin-top: 0px;
`
export const Para = styled.p`
  font-size: 28px;
`
export const Input = styled.input`
  background-color: transparent;
  border-style: solid;
  height: 35px;
  width: 250px;
  display: block;
  margin-left: auto;
  position: relative;
  top: -25px;
  right: 15px;
  padding-left: 10px;
  color: white;
  outline: none;
  border-color: #cbd5e1;
  border-right: none;
  border-width: 1px;
`
export const TrackList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  margin-top: 0px;
  width: 80%;
  margin: auto;
`
export const Track = styled.li`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 30px;
`
export const TrackImage = styled.img`
  width: 100px;
  height: 100px;
`
export const TrackContent = styled.div``
export const Name = styled.p``
export const Genre = styled.p`
  color: #3b82f6;
`
export const Time = styled.p`
  margin-left: auto;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: white;
  cursor: pointer;
`
