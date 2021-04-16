
import styled from 'styled-components'
import SideBarRow from './SideBarRow'
//import {HomeIcon,ExploreIcon,Subscription,VideoLibraryIcon} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function SideBar() {

return (
        <Container>
           <SideBarRow Icon ={HomeIcon} name={"Home page"} selected/>
           <SideBarRow Icon ={ExploreIcon} name={"Dicover"}/>
           <SideBarRow Icon ={SubscriptionsIcon} name={"Subscription chanel"}  />
           <hr />
           <SideBarRow Icon ={VideoLibraryIcon} name={"Library"}/>
           <SideBarRow Icon ={HistoryIcon} name={"History"}/>
           <SideBarRow Icon ={OndemandVideoIcon} name={"Your video"}/>
           <SideBarRow Icon ={WatchLaterIcon} name={"Watch Later"}/>
           <SideBarRow Icon ={ThumbUpAltOutlinedIcon} name={"Like video"}/>
           <SideBarRow Icon ={ExpandMoreOutlinedIcon} name={"Show more"}/>
        </Container>
    )
}

export default SideBar
const Container =styled.div`
flex:0.2;
border :1px solid whitesmoke;


`