function dateParser(date) {
  if (!date || date === "") {
    const currentDate = new Date();
    return { unix: currentDate.getTime(), utc: currentDate.toUTCString() };
  } else if (typeof date === "string") {
    if (Number.isNaN(+date) == false) {
      date = +date;
    }
    let parcedDate = new Date(date);
    if (parcedDate.toString() === "Invalid Date") {
      return { error: "Invalid Date" };
    }
    return { unix: parcedDate.getTime(), utc: parcedDate.toUTCString() };
  }
}

module.exports = dateParser;
