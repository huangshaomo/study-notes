class MyMatcher {
    [Symbol.match](string) {
      return 'hello world'.indexOf(string);
    }
  }
  
  'e'.match(new MyMatcher()) // 1