class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];
        int count = 0;
        
        for ( int i : numbers){
            answer[count] = i * 2;
            count++;
        }
            
        return answer;
    }
}