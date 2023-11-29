# Polynomial-Interpolation

이 코드는 주어진 점의 좌표의 집합을 기반으로 함수를 근사화하는 라그랑주 보간법을 구현한다. 
<br>
라그랑주 보간법은 지정된 모든 점을 통과하는 다항식을 생성하여 입력받은 좌표 범위 내의 임의의 지점에서 함수의 값을 추정할 수 있도록 한다.
<br>
# Process:

result: 항의 합계를 저장하기 위한 누적 변수
<br>
i: 데이터 포인트를 반복하기 위한 루프 카운터
<br>
<br>
좌표 집합에 대한 반복:
<br>
points[i].y: 현재 데이터 포인트의 y 좌표
<br>
j: 다른 데이터 포인트를 반복하기 위한 루프 카운터
<br>
<br>
라그랑주 항 생성:
<br>
현재 데이터 포인트가 대상 포인트와 다른지 확인 (i ≠ j)
<br>
현재 항을 대상 포인트와 다른 포인트의 x 값 차이로 곱함
<br>
<br>
항 누적:
<br>
생성된 항을 누적기에 추가
<br>
<br>
결과 반환:
<br>
추정된 함수 값으로 누적된 값을 반환
<br>
# Work
calculation on polynomial interpolation
<br>
Work with Soongmoon High School Si Yoon Choi 
