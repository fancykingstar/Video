import styled from "styled-components";
import {NavBar} from "../components/NavBar/NavBar";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import { Footer } from "../components/Footer/Footer";
import { CustomButton } from "../components/Button/CustomButton";
import { CustomImageButton } from "../components/ImageButton/CustomImageButton";

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
        <HeaderRow>
            <Header>
                <HeaderTitle>Brian Baumgartner</HeaderTitle>
            </Header>
        </HeaderRow>

        <BodyContainer>
            <BodyRow>
                <LeftCol>
                    <LeftColContainer>
                        <LeftColImage src="https://starboard-media.s3.amazonaws.com/v/no-wm-thumb-oTY5y0_fR-00001.jpg" alt="Video player preview" />
                        <VideoIcon src="https://d3el26csp1xekx.cloudfront.net/static/assets/video-cards-2.0/play.svg" />
                    </LeftColContainer>
                </LeftCol>

                <RightCol>
                    <RightColContainer>
                        <RightColContainerTitle>
                            For
                            <RightColContainerTitleStrong>Tanvi (pronounced "Thun-vee")</RightColContainerTitleStrong>
                            <Heart>
                                <HeartImage />
                                0
                            </Heart>
                        </RightColContainerTitle>
                        <DemoComment>
                            "Hilarious!"
                        </DemoComment>
                        <ButtonGroup>
                            <CustomButton 
                                text="Share on Twitter" 
                                color="#337ab7"
                                bgColor=""
                                fSize="14px"
                                fWeight="400"
                                padding="5px 10px"
                                lSpaceing=""
                                hoverC="#000"
                                hoverBG=""
                            />
                            <CustomButton
                                text="Share on FaceBook"
                                color="#337ab7"
                                bgColor=""
                                fSize="14px"
                                fWeight="400"
                                padding="5px 10px"
                                lSpaceing=""
                                hoverC="#000"
                                hoverBG=""
                            />
                            <CustomImageButton text="Download Video" src="download-to-storage-drive.svg" />
                        </ButtonGroup>
                        <ConfirmationTalentLink>
                            <ConfirmationContainer>
                                <ConfirmationImageLink href="/brianbaumgartner">
                                    <ConfirmationImage src="https://d31wcbk3iidrjq.cloudfront.net/static/user/P7x2KzmoD.jpg?w=180&h=180&q=80)" />    
                                </ConfirmationImageLink>
                                <ConfirmationInformation>
                                    <NameLink href="/brianbaumgartner">
                                        Brian Baumgartner
                                    </NameLink>
                                    <Office>
                                        Actor - The Office
                                    </Office>
                                    <CustomButton 
                                        text="Book Brian Baumgartner" 
                                        color="#fff"
                                        bgColor="#fa005c"
                                        fSize="18px"
                                        fWeight="600"
                                        padding="5px 18px"
                                        lSpaceing=".5px"
                                        hoverC="#fff"
                                        hoverBG="#7b002d"
                                    />
                                </ConfirmationInformation>
                            </ConfirmationContainer>
                        </ConfirmationTalentLink>
                    </RightColContainer>
                </RightCol>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);

export const HeaderRow = styled.div `
    
`;

export const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
  -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
    background: #ffffff;
`;

export const BodyContainer = styled.div`
    @media (min-width: 1280px){
        max-width: 1170px;
    }
    @media (min-width: 768px) {
        max-width: 100%;
        margin-top: 160px;
        padding: 0px;
    }
`;

export const BodyRow = styled.div`
    display: flex;
    color: #4d4d4d;
    padding-left: 16.67%;
    padding-right: 16.67%;

    @media (max-width: 991px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media (max-width: 767px) {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
        flex-direction: column;
    }
`;

export const Header = styled.div`
    background: #000000;
    position: absolute;
    width: 100%;
    display: none;
    padding-top: 70px;
    overflow: hidden;

    @media (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
        height: 500px;
        display: block;
    }    
`;

export const HeaderTitle = styled.span`
    font-family: fresh;
    font-size: 175px;
    line-height: 1;
    color: #fff;
    letter-spacing: -10px;
`;

export const LeftCol = styled.div`    
    position: relative;
    background-color: #ffffff;
    height: 100%;
    border-radius: 10px 0 10px 10px;

    @media (min-width: 768px) {
        width: 50%;
        border-radius: 10px;
    }
`;

export const LeftColContainer = styled.div`
    position: relative;
    padding-bottom: 15px;
`; 

export const LeftColImage = styled.img`
    min-height: 0;
    max-height: 1200px;
    border-radius: 10px 0 10px 10px;
    width: 100%;
    position: relative;

    @media (max-width: 767px) {
        border-radius: 10px;
    }
`;

export const VideoIcon = styled.img`
    position: absolute;
    bottom: 25px;
    left: 15px;
    cursor: pointer;
`;

export const RightCol = styled.div`
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const RightColContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
    border-radius: 0 10px 10px 0;
    padding: 20px 15px 0;

    @media (max-width: 767px) {
        padding: 20px 0 0 0;
    }
`;

export const RightColContainerTitle = styled.p`
    font-size: 48px;
    line-height: 48px;
    padding-top: 20px;
    padding-bottom: 24px;
`;

export const RightColContainerTitleStrong = styled.strong`
    letter-spacing: 1.1px;
    margin-left: 12px;
`;

export const Heart = styled.span`
    font-size: 26px;
    vertical-align: middle;
    white-space: nowrap;
`;

export const HeartImage = styled(HeartIcon)`
    color: #fa005c;
    font-size: 32px;
    margin-top: -10px;
    margin-left: 25px;
    margin-right: 8px;
`;

export const DemoComment = styled.p`
    font-size: 30px;
    font-style: italic;
    line-height: 1.5em;
    overflow-x: hidden;
    text-overflow: ellipsis;
    border-left: 4px solid #d538ff;
    padding-left: 8px;
    margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
    margin-bottom: 24px;
`;

export const ConfirmationTalentLink = styled.div`
    border-top: 1px solid #eee;
    padding-top: 24px;
    padding-bottom: 48px;
`;

export const ConfirmationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ConfirmationImageLink = styled.a`
`;

export const ConfirmationImage = styled.img`
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-right: 20px;
    vertical-align: top;
`;

export const ConfirmationInformation = styled.div`
    padding-top: 10px;
`;

export const NameLink = styled.a`
    margin-bottom: 6px;
    margin-top: 15px;
    color: #000;
    font-size: 25px;
    font-weight: 700;
    font-family: inherit;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #337ab7;
    }
`;

export const Office = styled.p`
    color: #999;
    margin-bottom: 3px;
    margin-top: 6px;
`;
