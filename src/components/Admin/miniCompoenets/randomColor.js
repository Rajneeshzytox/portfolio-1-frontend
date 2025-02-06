export const randomColor = (s=50, l=60, o=1) => {
    const randomNum =  Math.round(Math.random() * 100) 
            + Math.round(Math.random() * 300) 
            + Math.round(Math.random() * 200) ;
    return `hsla(${randomNum}, ${s}%, ${l}%, ${o})`
}
