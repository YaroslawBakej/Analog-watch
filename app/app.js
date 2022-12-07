function clockUpdate() {
    const hoursArrow = document.querySelector('.hours')
    const minutesArrow = document.querySelector('.minutes')
    const secondsArrow = document.querySelector('.seconds')

    const oneDegree = 6

    setInterval(() => {
        const date=new Date()
        
        const hours= date.getHours()*30
        const minutes=date.getMinutes()*oneDegree
        const seconds =date.getSeconds()*oneDegree

        hoursArrow.style.transform=`rotateZ(${hours+(minutes/12)}deg)`
        minutesArrow.style.transform=`rotateZ(${minutes}deg)`
        secondsArrow.style.transform=`rotateZ(${seconds}deg)`
    }, 0)
}

clockUpdate()