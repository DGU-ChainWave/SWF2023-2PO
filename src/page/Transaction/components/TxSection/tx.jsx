import React, { useState } from "react";
import {
  Title,
  TitleContainer,
  UpperContainer,
  SearchBar,
  DonationInfoContainer,
  SearchContainer,
  SearchIcon,
  InfoLabel,
  DonationInfoItem,
  InfoValue,
  GraphContainer,
  GraphTitle,
  ButtonContainer,
  TransactionButton,
} from "./styled";
import {
  LowerContainer,
  LatestTransactionsContainer,
  LatestTransactionsTitle,
  TransactionsTable,
  TableRow,
  TableHeader,
  TableCell,
  LatestBlocksContainer,
  LatestBlocksTitle,
  BlocksTable,
  BlockRow,
  BlockHeader,
  BlockCell,
  BlockIcon,
  BlockErrorIcon,
  AddressLabel,
  Address,
  TXButton,
  NFTButton,
  BlockCellTx,
  TxInfo,
  TitleColor,
  ViewMoreTxt,
} from "./styled";
import TxDetail from "../TxDetail";

import DonationsLineGraph from "../DonationLineGraph";

export const Upper = () => {
  // 거래 내역 필터 버튼
  const [activeButton, setActiveButton] = useState(null);

  // 버튼 클릭 이벤트 처리 함수
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    alert(buttonName);
  };

  // TODO: 이더스캔처럼 1개의 주소에 대한 거래내역 페이지 구현해야함
  // 검색창에서 돋보기 클릭시 알림창 띄움
  const handleIconClick = () => {
    alert("Icon clicked!");
  };

  return (
    <UpperContainer>
      <TitleContainer>
        <Title>거래 내역 탐색기</Title>
      </TitleContainer>
      <SearchContainer>
        <SearchBar />
        <SearchIcon onClick={handleIconClick} />{" "}
        {/* 아이콘 클릭 이벤트 핸들러 추가 */}
      </SearchContainer>
      <DonationInfoContainer>
        <DonationInfoItem>
          <InfoLabel>누적 거래량</InfoLabel>
          <InfoValue>320.556K</InfoValue>
        </DonationInfoItem>
        <DonationInfoItem>
          <InfoLabel>누적 기부액</InfoLabel>
          <InfoValue>3,838,408,493 원</InfoValue>
        </DonationInfoItem>
        <DonationInfoItem>
          <InfoLabel>평균 기부 달성률</InfoLabel>
          <InfoValue>68.5%</InfoValue>
        </DonationInfoItem>
      </DonationInfoContainer>
      <GraphContainer>
        <GraphTitle>기부런 거래 내역 최근 30일</GraphTitle>
        <DonationsLineGraph />
      </GraphContainer>
      <ButtonContainer>
        <TransactionButton onClick={() => alert("모든 거래")}>
          모든 거래
        </TransactionButton>
        <TransactionButton onClick={() => alert("NFT")}>NFT </TransactionButton>
        <TransactionButton onClick={() => alert("사업별")}>
          사업별
        </TransactionButton>
        <TransactionButton onClick={() => alert("토큰")}>
          토큰
        </TransactionButton>
      </ButtonContainer>
    </UpperContainer>
  );
};

export const Lower = () => {
  // 더 보기 클릭 이벤트 처리 함수
  const handleViewMoreClick = () => {
    alert("더 보기 클릭됨!");
  };

  return (
    <LowerContainer>
      <LatestTransactionsContainer>
        <TitleColor />
        <LatestTransactionsTitle>최신 발생 거래 내역</LatestTransactionsTitle>
        <TransactionsTable>
          <thead>
            <TableRow>
              <TableHeader>{/* Header content */}</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {/* Transaction rows */}
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x200D5ED7F45F4eE35960cF22EAde2076e75B253C" />

                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x200D5ED7F45F4eE35960cF22EAde2076e75B253C
                </Address>
                <TXButton>TX</TXButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x569DDba95A4bA347bd239DED8f8983bb5C4AC8" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x569DDba95A4bA347bd239DED8f8983bb4ASCFC8
                </Address>
                <TXButton>TX</TXButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0xb20B6fF0731465C083d8A2222f5093f27867446D" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0xb20B6fF0731465C083d8A2222f5093f278SC67446D
                </Address>
                <NFTButton>NFT</NFTButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />

                <TxDetail tx="0xa2b398FCb151a0Cf127D2a46297815f0F6c82C78" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0xa2b398CSFCb151a0Cf127D2a462978150F6c82C78
                </Address>
                <TXButton>TX</TXButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0xa2b398FCb151a0Cf127D2a46297815f0F6c82C78" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0xa2b398FCb151a0Cf17D2a46297815f0FCS6c82C78
                </Address>
                <TXButton>TX</TXButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x111d4f7A8E5D579b26FB1418600c3730cBbae72A" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x111d4f7A8E5D579b26FB1C418600c3730cBbae72A
                </Address>
                <NFTButton>NFT</NFTButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x20b4E32157A549761Bb51D17bb1388872978FFda" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x20b4E32157A549761Bb51D17bb1388872978FFda
                </Address>
                <NFTButton>NFT</NFTButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x6a36d0feB51A663B0603598a03862746bE0f5564" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x6a36d0feB51A663B06035CS8a03862746bE0f5564
                </Address>
                <NFTButton>NFT</NFTButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <BlockIcon />
                <TxDetail tx="0x62099Ab0eeee03de0a36561Eac64357eFfC85Eb9" />
                <AddressLabel>To.</AddressLabel>
                <Address href="#">
                  0x62099Ab0eeee03de0a36561Eac6435C7eFfC85Eb9
                </Address>
                <NFTButton>NFT</NFTButton>
              </TableCell>
            </TableRow>
          </tbody>
        </TransactionsTable>
        <ViewMoreTxt onClick={handleViewMoreClick}>더보기</ViewMoreTxt>
      </LatestTransactionsContainer>

      <LatestBlocksContainer>
        <TitleColor />
        <LatestBlocksTitle>오류 발생 거래 내역</LatestBlocksTitle>
        <BlocksTable>
          <thead>
            <BlockRow>
              <BlockHeader>{/* Header content */}</BlockHeader>
            </BlockRow>
          </thead>
          <tbody>
            {/* Block rows */}
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0xd882296EE239C79478633f07e12963Bb72F33945" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0xd882296EE239C79478633f07e12963Bb72F33945
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x082b7ec140f8c48E1b532625C27d911A417305de
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0x199D5ED7F45F4eE35960cF22EAde2076e95B253F" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0x199D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x689D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0x330c0F7Fd73D41D9915bDBe8448d490A397fBeA2" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0x330c0F7Fd73D41D9915bDBe8448d490A397fBeA2
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x689D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0x9D36F8894757cf8a5DCd693dfA13963f6b9D097d" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0x9D36F8894757cf8a5DCd693dfA13963f6b9D097d
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x689D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0x1F0697264E524a682a0697cefB6FFCcCD86257c4" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0x1F0697264E524a682a0697cefB6FFCcCD86257c4
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x689D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
            <BlockRow>
              <BlockCell>
                <BlockErrorIcon />
                <TxDetail tx="0x199D5ED7F45F4eE35960cF22EAde2076e95B253F" />
                <BlockCellTx>
                  <TxInfo>
                    <AddressLabel>To.</AddressLabel>
                    <Address href="#">
                      0x199D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                  <TxInfo>
                    <AddressLabel>From.</AddressLabel>
                    <Address href="#">
                      0x689D5ED7F45F4eE35960cF22EAde2076e95B253F
                    </Address>
                  </TxInfo>
                </BlockCellTx>
              </BlockCell>
            </BlockRow>
          </tbody>
        </BlocksTable>
        <ViewMoreTxt onClick={handleViewMoreClick}>더보기</ViewMoreTxt>
      </LatestBlocksContainer>
    </LowerContainer>
  );
};
