function enhanceDays(time) {
    const today = new Date()
    const hour           = parseInt(today.getHours())
    const minute         = parseInt(today.getMinutes())
    const second         = parseInt(today.getSeconds())
    const [year, month, day] = time.split('-')
    
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
  }


  function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs((dateFuture - dateNow) / 1000)

    const df = new Date(dateFuture)
    const dn = new Date(dateNow)

    const year1           = parseInt(df.getFullYear())
    const month1          = parseInt((df.getMonth()+1))
    const day1            = parseInt(df.getDate())
    // const hour1           = parseInt(df.getHours())
    // const minute1         = parseInt(df.getMinutes())
    // const second1         = parseInt(df.getSeconds())

    const year2           = parseInt(dn.getFullYear())
    // const month2          = parseInt((dn.getMonth()+1))
    // const day2            = parseInt(dn.getDate())
    // const hour2           = parseInt(dn.getHours())
    // const minute2         = parseInt(dn.getMinutes())
    // const second2         = parseInt(dn.getSeconds())

    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



    if ( diffInMilliSeconds  <60){
        return `${Math.trunc(diffInMilliSeconds) } s`
    }
    if (diffInMilliSeconds >59 && diffInMilliSeconds < 3600){
        return `${Math.trunc(diffInMilliSeconds /60)}m`
    }

    if (diffInMilliSeconds >3599 && diffInMilliSeconds < 86400 ){
        return `${Math.trunc(diffInMilliSeconds /3600)}h `
    }

    if(diffInMilliSeconds >86399 && diffInMilliSeconds <604800){
        return `${Math.trunc(diffInMilliSeconds /86400)}d`
    }

    if(diffInMilliSeconds >604799){
        if (year2 === year1){
            return `${day1} ${monthList[month1-1]}`
        }
        return `${day1} ${monthList[month1-1]} ${year1}`
    }
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
     timeDiff : function (propsTime) {
        console.log(enhanceDays(propsTime))
        return timeDiffCalc(new Date(), new Date(enhanceDays(propsTime)))
    }  
}