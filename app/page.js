// import styles from './page.module.css'

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";

export default function Home() {
  return (<>
    <Navbar name="Home" />
    <Themes />
    <Homepage />
  </>
  )
}
