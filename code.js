function permutationSort(a) {
    if (a.length == 0 || a.length == 1) {
        return 0;
    }
    var isHomogeneous = true;
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] != a[0]) {isHomogeneous = false;}
    }    
    if (isHomogeneous == true) {return 0;}
    var sortValue = [false, -1]; // including original as permutation, change 0 to -1 to not
    var tmpArray = new Array(a.length);
    permutations(a, 0, sortValue, tmpArray);
    arr = tmpArray;
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
        //console.log(arr);
        if (isSorted(arr)) {
            //console.log("sorted");
            for (var i = 0; i < arr.length; i++) {
                tmp[i] = arr[i];
            }
            trfa[0] = true;
            return;
        }
        //console.log("not sorted");
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        //console.log(trfa);
        if (trfa[0] == true) {break;}
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
        permutations(arr, idx + 1, trfa, tmp);
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
}
