class Solution {
    public int[] solution(int[] num_list) {
        int length = num_list.length;
        int[] answer = new int[length + 1];
        
        for (int x = 0; x < length; x++){
            answer[x] = num_list[x];
        }
        
        if (num_list[length-1] > num_list[length-2]){
            answer[length] = num_list[length-1] - num_list[length-2];
        } else {
            answer[length] = num_list[length-1] * 2;
        }
        return answer;
    }
}