import React from "react";
import { Container, NewsText } from "../../style/Shop/Shop-Layout";
import { UserGoods } from "../../style/Shop/Shop-UserList" 
import NewsList from "../../component/shop/NewsList";
import UserList from "../../component/shop/UserList";

const ShopPage = () => {
  return (
    <>
      <Container>
        <NewsText>뉴스보기</NewsText>
        <NewsList></NewsList>
        <br /><br /><br />
        <UserGoods>아티스트</UserGoods>
        <UserList></UserList>
      </Container>
    </>
  );
}

export default ShopPage;
