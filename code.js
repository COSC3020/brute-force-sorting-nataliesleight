function permutationSort(a) {
    if (a.length == 0 || a.length == 1) {
        return 0;
    }
    
    var sortValue = [false, 0];

    var tmpArray = new Array(a.length);
    permutations(a, 0, sortValue, tmpArray);
    for (var i = 0; i < a.length; i++) {
    a[i] = tmpArray[i];}

    return sortValue[1];
}

function isSorted(a) {
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i+1]) {return false;}
    }
    return true;
}



function permutations(arr, idx, trfa, tmp) {
    
    if (idx === arr.length) {
        trfa[1] += 1;
        if (isSorted(arr)) {
            for (var i = 0; i < arr.length; i++) {
                tmp[i] = arr[i];
            }
            trfa[0] = true;
            return;
        }
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        if (trfa[0] == true) {break;}
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
        permutations(arr, idx + 1, trfa, tmp);
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
}
