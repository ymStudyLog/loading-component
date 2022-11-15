# 설치

git clone https://github.com/ymStudyLog/loading-component.git

npm start

# 사용 방법

1. 설치까지는 필요하지 않고 Loading 컴포넌트 코드를 그냥 복사해서 사용해도 된다.
2. color props로 spinning 조각의 색상을 변경할 수 있다.  
3. text props로 spinner 하단에 멘트를 추가할 수 있다.

```
Loading.defaultProps = {
  color: '#2196f3',
  text: 'Loading...',
};
```

# 수정 예정

1. GlobalStyle 컴포넌트 없이 크로스 브라우징 되도록 변경 예정
