var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    return array.sort(function (left, right) {
        // write code here
        var typeOfLeft = isNull(left);
        var typeOfRight = isNull(right);
        
        if (dataPriority.indexOf(typeOfLeft) > dataPriority.indexOf(typeOfRight)) {
            return 1;
        } else if (dataPriority.indexOf(typeOfLeft) < dataPriority.indexOf(typeOfRight)) {
            return -1;
        } else if (dataPriority.indexOf(typeOfLeft) == dataPriority.indexOf(typeOfRight) && left > right) {
            return 1;
        } else if (dataPriority.indexOf(typeOfLeft) == dataPriority.indexOf(typeOfRight) && left < right) {
            return -1;
        }
    });
}

function isNull(value) {
    // write code here
    var valType = typeof(value);

    if (valType === 'object' && value == null) {
        return valType = 'null';
    } else {
        return valType;
    }
}