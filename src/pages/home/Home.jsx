import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import "./home.css"

function home() {
  return (
    <>
    <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>     
    </>   
  )
}

export default home

  