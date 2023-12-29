import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./style/Footer";
import FooterContext from "./context/FooterContext";
import Performance from "./pages/performance/Performance";
import PerformanceDetail from "./pages/performance/PerformanceDetail";
import PerformanceUpdate from "./pages/performance/PerformanceUpdate";
import KakaoLogin from "./api/KakaoLoginApi";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import MusicInfo from "./pages/musicPage/MusicInfoPage";
import MusicRegistPage from "./pages/musicPage/MusicRegistPage";
import MusicList from "./pages/musicPage/MusicListPage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import ShopPage from "./pages/Shop/ShopPage";
import CartPage from "./pages/Product/CartPage";
import ProductPage from "./pages/Product/ProductPage";
import OrderFormPage from "./pages/Product/OrderFormPage";
import Test from "./pages/SimpleTest";
import AdminPage from "./pages/AdminPage";
import { CartProvider } from "./context/CartContext";
import FindEmail from "./pages/FindEmail";
import FindPassword from "./pages/FindPassword";
import OtherPage from "./pages/OtherPage";
function App() {
  const [footerData, setFooterData] = useState([]);
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <Router>
          <FooterContext.Provider value={{ footerData, setFooterData }}>
            <Header />
            <Routes>
              <Route path="/performance" element={<Performance />} />
              <Route
                path="/PerformanceUpdate"
                element={<PerformanceUpdate />}
              />
              <Route
                path="/PerformanceDetail/:id"
                element={<PerformanceDetail />}
              />
              <Route path="/" element={<MainPage></MainPage>} />
              <Route path="/login" element={<LoginPage></LoginPage>} />
              <Route path="/signup" element={<SignupPage></SignupPage>} />
              <Route path="/kakao" element={<KakaoLogin></KakaoLogin>} />
              <Route
                path="/music-regist"
                element={<MusicRegistPage></MusicRegistPage>}
              />
              <Route path="/music-list" element={<MusicList></MusicList>} />
              <Route path="/music-info/:id" element={<MusicInfo></MusicInfo>} />
              <Route
                path="/communitypage"
                element={<CommunityPage></CommunityPage>}
              />
              <Route path="/otherpage/:email" element={<OtherPage />} />
              <Route path="/mypage" element={<MyPage></MyPage>} />
              <Route path="/shop" element={<ShopPage></ShopPage>} />
              <Route path="/product" element={<ProductPage></ProductPage>} />
              <Route path="/cart" element={<CartPage></CartPage>} />

              <Route
                path="/orderform"
                element={<OrderFormPage></OrderFormPage>}
              />
              <Route path="/product" element={<ProductPage></ProductPage>} />
              <Route path="/findemail" element={<FindEmail></FindEmail>} />
              <Route
                path="/findpassword"
                element={<FindPassword></FindPassword>}
              />
              <Route path="/admin" element={<AdminPage></AdminPage>} />

              <Route path="/test" element={<Test></Test>} />
            </Routes>
            <Footer />
          </FooterContext.Provider>
        </Router>
      </CartProvider>
    </>
  );
}
export default App;
