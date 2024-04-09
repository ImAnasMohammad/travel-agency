import React from 'react'

const styles={
    text:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        zIndex:'2',
        color:'#ffff',
        textAlign:'center'
    },
    shadow:{
        position:'absolute',
        zIndex:'1',
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.6)'
    },

    banner:{
        position:'relative'
    },
}
const Banner = ({src,text,path}) => {
  return (
    <div style={styles.banner}>
        <div style={styles.shadow}></div>
        <div style={styles.text}>
            <h1  className='display-3'>{text}</h1>
        </div>
        <img src={src} alt={text} className='w-90 ratio ratio-16x9' />
    </div>
  )
}

export default Banner