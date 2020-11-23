let data = '2009-10-09T17:52:12Z';

// takes in a date and returns a formatted date string
function formatDate(dateString) {
    let finalDate;
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    let date = new Date(dateString).toLocaleDateString(undefined, options);
    const currentYear = new Date().getFullYear();

    if (date.includes(currentYear)) {
        date.replace(currentYear, '');
        const formattedDate = date.split(',')[0].split(' ');
        finalDate = `${formattedDate[1]} ${formattedDate[0]}`;
    } else {
        const dateArr = date.split(',');
        const formattedDate = dateArr[0].split(' ');
        finalDate = `${formattedDate[1]} ${formattedDate[0]}, ${dateArr[1].trim()}`;
    }
    return finalDate;
}

console.log(formatDate(data));
