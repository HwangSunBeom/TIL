T = int(input())
for test_case in range(1, T+1) :
    N, M = map(int, input().split())
    grid = [ list(map(int, input().split())) for _ in range(N)]
    max_bug = 0
    for i in range(N-M+1) :
        for j in range(N-M+1) :
            kill_bug = 0
            for x in range(M) :
                for y in range(M) :
                    kill_bug += grid[i + x][j + y]
            if max_bug < kill_bug :
                max_bug = kill_bug
    print(f"#{test_case} {max_bug}")

