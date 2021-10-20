const parseTime = function(time){
    if(isNaN(time)) {
        if(new Date(time) != "Invalid Date") {
            return {
                unix: new Date(time).getTime(),
                utc: new Date(time).toUTCString()
            }
        }else {
            return {
                error: 'Invalid Date'
            }
        }
    }else {

        if(new Date(+time) != "Invalid Date") {
            return {
                unix: time,
                utc: new Date(+time).toUTCString()
            }
        }else {
            return {
                error: 'Invalid Date'
            }
        }
        
    }

};
module.exports = parseTime;