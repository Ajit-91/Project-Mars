
export default function formatDate(givenFormat){
    let options = {
        day : "numeric",
        month : "long",
        year : "numeric"
    }
    let date = new Date(givenFormat);
    date = date.toLocaleDateString("en-GB", options)

    return date;
}
