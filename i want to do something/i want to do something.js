console.log(Date());
e()
function dateReplicator(){
    const day = {
        dayOfTheWeek: Date().slice(0,3),
        month: Date().slice(4,7),
        day: Date().slice(8,10),
        year: Date().slice(11,15),
        hour: Date().slice(16,18),
        minute: Date().slice(19,21),
        second: Date().slice(22,24),
        gmt: Date().slice(25,34),
        timezone: Date().slice(35,57),
        space: " ",
        colon: ":",
    }
    const partOne = (day.dayOfTheWeek + day.space + day.month + day.space + day.day + day.space);
    const partTwo = (partOne + day.year + day.space + day.hour + day.colon + day.minute);
    const partThree = (partTwo + day.colon + day.second + day.space + day.gmt + day.space);
    const partFour = (partThree + day.timezone);
    console.log(partFour);
}