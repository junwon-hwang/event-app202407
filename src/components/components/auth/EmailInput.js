import React, { useEffect , useRef, useState } from 'react';
import styles from './SignUpForm.module.scss';

const EmailInput = () => {

  const inputRef = useRef();

  // 입력한 이메일
  const [enteredEmail , setEnteredEmail] = useState('');
 
  // 검증여부
  const [emailValid, setEmailValid] = useState(false);

  // 에러 메시지 
  const [error , setError] = useState('');

  // 이메일 패턴 검증
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 패턴 검사
    return emailPattern.test(email);
  };

  // 이메일 검증 후속 처리 
  const checkEmail = (email) => {
    if(!emailValid){
      // 에러메시지 세팅
      setError('이메일 형식이 유효하지 않습니다.');
      return;
    }
    // 중복 검사 


  };


  const changeHandler = e =>{
    const email = e.target.value;
    const isValid = validateEmail(email);
    // console.log(isValid);

    setEnteredEmail(email);
    setEmailValid(isValid);

    // 이메일 검증 후속 처리
    checkEmail();

  };

  // 렌더링 되자마자 입력창에 포커싱
  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <>
      <p>Step 1: 유효한 이메일을 입력해주세요.</p>
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        onChange={changeHandler}
        className={!emailValid ? styles.invalidInput : ''}
      />
      {!emailValid && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
};

export default EmailInput;