function solution(arr) {
    const UniqueArr = [...new Set(arr)];
    UniqueArr.sort((a, b) => b - a);
    return UniqueArr;
}

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
