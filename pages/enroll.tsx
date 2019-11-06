import styled from "styled-components";
import {NavBar} from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import {InputText} from "../components/InputText/InputText"
import React from "react";

const Index = () => (
    <>
        <NavBar />
        <Body />
        <Footer />
    </>
);

export default Index;

const Body = () => (
    <BodyWrapper>
        <BodyContainer>
            <BodyRow>
                <BodyRowContent>
                    <FormTitle>
                        Apply to join Cameo
                    </FormTitle>
                    <FormDesc>
                        If you have fans and want to join Cameo as talent, you can enroll here and we'll be in touch.
                    </FormDesc>
                    <FormRowContent>
                        <RowLable>Your name</RowLable>
                        <InputText type="text" placeholder="Michael Jordan" />

                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Email</RowLable>
                        <InputText type="email" placeholder="you@example.com" />
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Phone number (never shared)</RowLable>
                        <InputText type="number" placeholder="555-555-5555" />
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Where can we find you?</RowLable>
                        <InputWrapper>
                            <Select type="number" defaultValue="twitter" placeholder="555-555-5555" >
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="twitch">Twitch</option>
                                <option value="musically">TikTok</option>
                                <option value="other">Other</option>
                            </Select>
                        </InputWrapper>
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>Your handle</RowLable>
                        <InputText type="text" placeholder="@jimmybuffet" />
                    </FormRowContent>
                    <FormRowContent>
                        <RowLable>How many followers do you have?</RowLable>
                        <InputText type="text" placeholder="400k" />
                    </FormRowContent>
                    <FormRowContent>
                        <SubmitBtn>
                            Submit
                        </SubmitBtn>
                    </FormRowContent>
                </BodyRowContent>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);
const SubmitBtn = styled.div`
    background: transparent;
    font-family: spinnler,Courier,monospace;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    position: relative;
    color: #fff;
    background-color: #fa005c!important;
    padding: 10px 21px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 3px;
`
const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: table;
    border-collapse: separate;
    
    input {
        padding: 0;
        border: none;
        border-radius: 0;
        line-height: 1.3;
        box-shadow: inset 0 -1px 0 #ddd;
        font-size: 18px;
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
        height: 38px;
        background-color: transparent;
        background-image: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:focus {
            box-shadow: inset 0 -2px 0 #337ab7;
            z-index: 3;
            outline: unset;
        }
        &::placeholder{
          color: #ddd;
        }
    }
`
const RowLable = styled.label`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0;
`
const FormRowContent = styled.div`
    margin-bottom: 15px;
`
const FormDesc = styled.div`
    margin-bottom: 10px;
`
const FormTitle = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 700;
`
const BodyRowContent = styled.div`
    margin: 0px;
    width: 100%;
    color: #4d4d4d;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
        margin-left: 25%;
        width: 50%;
        padding: 0px;
    }
`
const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  @media (min-width: 992px){
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;


const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

const Select = styled.select`
    border: 0;
    border-radius: 0;
    padding-left: 0;
    background-size: 13px;
    background-repeat: no-repeat;
    background-position: 100%;
    box-shadow: inset 0 -1px 0 #ddd;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: 38px;
    padding: 6px 16px;
    padding-left: 0px;
    background-color: transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus {
        box-shadow: inset 0 -2px 0 #337ab7;
        z-index: 3;
        outline: unset;
    }
`;