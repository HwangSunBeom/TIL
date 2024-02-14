def solution(code):
    ret = ''
    mode, idx = 0, 0
    for x in code :
        if x == '1' :
            mode = int(not bool(mode))
        elif mode == 0 and idx % 2 == 0 :
            ret += x
        elif mode == 1 and idx % 2 == 1 :
            ret += x
        idx += 1
    if ret != '' :
        return ret
    else :
        return 'EMPTY'