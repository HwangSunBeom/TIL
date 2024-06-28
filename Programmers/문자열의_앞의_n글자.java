// 문자열 앞의 n글자

class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        for (int i=0; i<n; i++) {
            answer = answer + my_string.charAt(i);
        }
        return answer.toString();
    }
}