import { api } from "../../api"
import { useState, useEffect } from "react"
import styled from "../styles/Album.module.css";
import { Link } from "react-router-dom"
import { Footer } from "../footer/Footer";
import loading from "../../assets/loading.gif";
import { BackButton } from "../button/BackButton";

export const Album = () => {
  type Props = {
    id: number;
    title: string;
}

const [albumItem, setAlbumItem] = useState([])
const [finishedTimeOut, setFinishedTimeOut] = useState(false)

useEffect(() => {
    api.getAlbum()
        .then((res) => {
            setAlbumItem(res)
        }  
    )
}, [])

const [count, setCount] = useState({num1: 1, num2: 20})

const updateCount = (state1: number, state2: number) => {
  setCount({num1: state1, num2: state2})
}

useEffect(() => {
  const id: ReturnType<typeof setTimeout> = setTimeout(() => {
    setFinishedTimeOut(true)
  }, 3)
  return () => clearTimeout(id)
}, [])

  if (!finishedTimeOut) {
    return (
      <div className={styled.loadingDiv}>
        <img width="100px" height="100px" className={styled.loading} src={loading} alt="" />
        <p>Carregando...</p>
      </div>
    )
  } else {
    return (
      <>
        <div className={styled.flex_container}>
          <div className={styled.album}>
            {albumItem.map((obj: Props) => {
              if (obj.id >= count.num1 && obj.id <= count.num2) {
                return (
                  <>
                    <div className={styled.albums} key={obj.id}>
                      <Link to={`/album/${obj.id}`} className={styled.link}>
                        <div >
                          {obj.title}
                        </div>
                      </Link>
                    </div>
                    <div>
                    </div>
                  </>
                )
              }
            })}
          </div>
          <div className={styled.navButton}>
            <button className={styled.button} onClick={(() => updateCount(1, 20))}>1</button>
            <button className={styled.button} onClick={(() => updateCount(21, 40))}>2</button>
            <button className={styled.button} onClick={(() => updateCount(41, 60))}>3</button>
            <button className={styled.button} onClick={(() => updateCount(61, 80))}>4</button>
            <button className={styled.button} onClick={(() => updateCount(81, 100))}>5</button>
            <BackButton />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}



