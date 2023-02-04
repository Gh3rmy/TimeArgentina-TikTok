 function getVidId() {
        const tiktokUrl= document.querySelector("#url").value;
        const regex = /(?<=\/video\/)(.*?)(?=$|[^0-9])/;
        const vidId = regex.exec(tiktokUrl)[0];
        return vidId;
}
function extractUnixTimestamp(vidId) {
        const asBinary = BigInt(vidId).toString(2);
        const first31Chars = asBinary.slice(0, 31);
        const timestamp = parseInt(first31Chars, 2);
        return timestamp;
}

function unixTimestampToHumanDate(timestamp) {
        var milliseconds = timestamp * 1000;
        milliseconds = milliseconds - (3600000 * 3);

        const dateObject = new Date(milliseconds);
        const humanDateFormat = dateObject.toUTCString()+" (UTC-3 Zona horaria de Argentina)";
        return humanDateFormat;
}

function getDate() {
        const vidId = getVidId();
        const unixTimestamp = extractUnixTimestamp(vidId);
        const humanDateFormat = unixTimestampToHumanDate(unixTimestamp);
        document.querySelector("#date").textContent = humanDateFormat;
}
  