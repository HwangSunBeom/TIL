import React, { useState } from "react";
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";

const SubmitComponent = () => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
);

function WritePost() {
  //useState만들기
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  //2개를 동시에 관리하기 위한 객체 만들어주기
  const { title, contents } = inputs;
  // onChange 함수 만들어주기
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost onChange={onChange} title={title} contents={contents} />
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;
