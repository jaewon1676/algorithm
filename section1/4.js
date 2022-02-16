/* 1부터 N까지 합 출력하기
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..
▣ 출력설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.
▣ 입력예제 1
6
▣ 출력예제 1
21
▣ 입력예제 2
10
▣ 출력예제 2
55 */

function solution(n){
    let sum = 0;
    for (let i=0; i<=n; i++){
        sum += i
    }
    return sum;
}

console.log(solution(10))