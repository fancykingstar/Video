import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import BoltIcon from "@material-ui/icons/OfflineBoltSharp";
import { Footer } from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";
import {RelatedCard} from "../components/RelatedCard/RelatedCard";
import {CardListItem} from "../components/CardListItem/CardListItem";


const Index = () => (
  <>
    <NavBar />
    <Body />
    <Footer />
  </>
);

const rCards = [
    {
        price: "$25",
        src: "tjlavin_bottom.png",
        smallTitle: "MTV - The Challenge",
        title: "Zach Nichols"
    },
    {
        price: "$25",
        src: "tjlavin_bottom.png",
        smallTitle: "MTV - The Challenge",
        title: "Zach Nichols"
    },
    {
        price: "$25",
        src: "tjlavin_bottom.png",
        smallTitle: "MTV - The Challenge",
        title: "Zach Nichols"
    },
    {
        price: "$25",
        src: "tjlavin_bottom.png",
        smallTitle: "MTV - The Challenge",
        title: "Zach Nichols"
    }
];

export default Index;

const Body = () => (
  <BodyWrapper>
    <BodyContainer>
      <BodyRow>
        <TopSectionContainer>
          <TopSectionLeftContainer>
              <img src="/tjlavin_top.png" alt="image" />
          </TopSectionLeftContainer>
          <TopSectionRightContainer>
              <TopSectionRightContent>
                <TopSectionTitle>
                    TJ Lavin
                </TopSectionTitle>
                <TopSectionSubTitle>
                    TV Host - MTV's The Challenge - BMX Rider
                </TopSectionSubTitle>
                <TopSectionTxt>
                    Good times only please unless we’re gonna smash someone as a joke! ❤️
                </TopSectionTxt>
                <TopSectionButtonContainer>
                    <ButtonContainer>
                        Book now for $100
                    </ButtonContainer>
                    <FollowBtn>
                        Follow
                    </FollowBtn>
                </TopSectionButtonContainer>
                <RespondDesc>
                    <BoltIcon />
                    <DescTxt>
                        TYPICALLY RESPONDS IN 3 HOURS.
                    </DescTxt>
                </RespondDesc>
                <ReviewContainer>
                    <ReviewStar>
                        <ReviewTitle>
                            491 Reviews
                        </ReviewTitle>
                        <ReviewContainer>
                            <ReviewSection>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </ReviewSection>
                            <ReviewCount>
                                5 stars
                            </ReviewCount>
                        </ReviewContainer>
                        <AllReviews>
                            See all reviews
                        </AllReviews>
                    </ReviewStar>
                    <ReviewDesc>
                        "Thank you TJ! That was perfect. Literally everything I hoped and more. Thanks dude"
                    </ReviewDesc>
                </ReviewContainer>
                <UserCategoryList>
                    <UserCatItem>
                        TV Hosts
                    </UserCatItem>
                    <UserCatItem>
                        Reality TV
                    </UserCatItem>
                    <UserCatItem>
                        Featured
                    </UserCatItem>
                    <UserCatItem>
                        Extreme Sports
                    </UserCatItem>
                    <UserCatItem>
                        MTV
                    </UserCatItem>
                    <UserCatItem>
                        The Challenge
                    </UserCatItem>
                    <UserCatItem>
                        BMX
                    </UserCatItem>
                </UserCategoryList>
              </TopSectionRightContent>
          </TopSectionRightContainer>
        </TopSectionContainer>
      </BodyRow>
      <BodyRow>
        <ResultsContainer>
          <ResultTitle>
            Latest
          </ResultTitle>
          <ResultsGrid>
              <CardListItem />
              <CardListItem />
              <CardListItem />
              <CardListItem />
          </ResultsGrid>
        </ResultsContainer>
      </BodyRow>
      <BodyRow>
        <ResultsContainer>
          <ResultTitle>
            Related
          </ResultTitle>
          <ResultsGrid>
            {
              rCards.map((card, index) => {
                return <RelatedCard price={card.price} src={card.src} smallTitle={card.smallTitle} title={card.title} key={index} />
              })
            }
          </ResultsGrid>
        </ResultsContainer>
      </BodyRow>
    </BodyContainer>
  </BodyWrapper>
);
const ResultTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 12px;
`
const UserCatItem = styled.a`
    padding: 9px 18px;
    margin: 0 12px 7px 0;
    border-radius: 30px;
    display: inline-block;
    background-color: #f7f7f7;
    color: #4d4d4d;
    text-decoration; none;
    font-size: 18px;
    &:hover {
      background-color: #ececec;
    }
`
const UserCategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
`
const AllReviews = styled.a`
    cursor: pointer;
    color: #337ab7;
    text-decoration: none;
    font-size: 18px;
   
`
const ReviewCount = styled.div`
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 700;
    margin: 8px 0px;
`
const ReviewSection = styled.div`
    color: #ffc200;
    
`
const ReviewTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #4d4d4d;
`
const ReviewDesc = styled.div`
    width: 66.6666%;
    max-width: 420px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ReviewStar = styled.div`
    width: 33.3333%;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ReviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const RespondDesc = styled.div`
    margin-bottom: 20px;
    svg {
        color: gold;
    }
`
const DescTxt = styled.span`
    padding-left: 10px;
    font-size: 14px;
    letter-spacing: .5px;
    font-weight: 600;
    text-transform: uppercase;
`
const FollowBtn = styled.a`
    color: #131631;
    background-color: transparent;
    padding: 4px 24px;
    margin-right: 1.5rem;
    border-radius: 3px;
    line-height: 1.5;
    text-align: center;
    vertical-align: center;
    border: 2px solid #131631;
    margin-bottom: 12px;
    cursor: pointer;
    @media (max-width: 768px) {
      color: #ffffff;
      border-color: #ffffff;
      position: absolute;
      top: 20px;
      right: 0px;
   }
`
const ButtonContainer = styled.a`
    color: #ffffff;
    cursor: pointer;
    background-color: #fa005c;
    padding: 6px 21px 6px 21px;
    margin-bottom: 12px;
    margin-right: 1.5rem;
    boder: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    translation: all .4s;
    border-radius: 3px;
    line-height: 1.5;
    text-align: center;
    vertical-align: center;
    min-width: 205px;
    max-width: 100%;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0px;
   }
`
const TopSectionButtonContainer = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 24px;
`;

const TopSectionTxt = styled.div`
  color: #4d4d4d;
  font-size: 18px;
  line-height: 1.5;
`;

const TopSectionSubTitle = styled.div`
  color: #4d4d4d;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const TopSectionTitle = styled.div`
  color: #4d4d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 36px;
`;

const TopSectionRightContent =  styled.div`
  padding-left: 30px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  font-size: 18px;
  margin-bottom: 40px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1280px){
    max-width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const Title = styled.h3`
  color: #4d4d4d;
  margin: 0;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
`;

const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 1200px) {
    margin-left: 8.333333%;
    margin-right: 8.333333%;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResultsContainer = styled.div.attrs({ className: "w-6/6" })`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100% !important;
  }
  @media (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopSectionLeftContainer = styled.div`
  width: 33.333333%;
  max-width: 280px;
  img {
    width: 100%;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 0px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const TopSectionRightContainer =  styled.div`
  width: 66.666666%;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`;