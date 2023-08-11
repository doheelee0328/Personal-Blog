import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 660px) {
    justify-content: center; /* Center content when sidebar is hidden */
  }

  .sidebar {
    @media (max-width: 660px) {
      display: none;
    }
  }
`

export const PostWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
`
export const ResponsiveSidebar = styled(Sidebar)`
  @media (max-width: 660px) {
    display: none;
  }
`
