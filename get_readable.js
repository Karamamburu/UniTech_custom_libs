function getReadableShortDate(date) {
    _monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    _day = Day(date)
    _month = Month(date)
    _monthName = _monthsArray[_month - 1]; 
    _readableShortDate = _day + " " + _monthName

    return _readableShortDate
}

function getReadableFullDate(date) {
    _monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    _day = Day(date)
    _month = Month(date)
    _year = Year(date)
    _monthName = _monthsArray[_month - 1]; 
    _readableFullDate = _day + " " + _monthName + " " + _year + " года"

    return _readableFullDate
}

function getReadableShortName(fullname) {

    _fullnameArray = fullname.split(" ")
    _name = _fullnameArray[1]
    _lastName = _fullnameArray[0]
    _readableShortName = _name + " " + _lastName 

    return _readableShortName
}

function getOnlyName(fullname) {

    _fullnameArray = fullname.split(" ")
    _name = _fullnameArray[1]

    return _name
}