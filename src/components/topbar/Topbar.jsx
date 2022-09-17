import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Socia</span>
        </div>
        <div className="topbarMiddle">
          <div className="searchbar">
            <Search/>
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assests/person/person1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar