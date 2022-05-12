import React from "react";
import styled from "@emotion/styled";
import { RiSearchLine } from "react-icons/ri";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header: React.FC = () => {
  const handleKeyword = () => {};
  return (
    <header>
      <Base>
        <Nav>
          <MenuListWrapper>
            <MenuList>
              <Menu>
                <Link href="/">
                  <Logo style={{ width: 151, height: 29 }} />
                </Link>
              </Menu>
              <Menu>
                <Link href="/">
                  <MenuBtn>영화</MenuBtn>
                </Link>
                <Link href="tv">
                  <MenuBtn>TV 프로그램</MenuBtn>
                </Link>
              </Menu>
              <SearchMenu>
                <SeachContainer>
                  <SerachFormWrapper>
                    <SearchForm>
                      <SearchLabel>
                        <RiSearchLine style={{ opacity: 0.3 }} />
                        <SearchInput
                          placeholder="콘텐츠, 인물 컬랙션, 유저를 검색해보세요."
                          onChange={handleKeyword}
                        />
                      </SearchLabel>
                    </SearchForm>
                  </SerachFormWrapper>
                </SeachContainer>
              </SearchMenu>
              <Menu>
                <SignIn>로그인</SignIn>
              </Menu>
              <Menu>
                <SignUp>회원가입</SignUp>
              </Menu>
            </MenuList>
          </MenuListWrapper>
        </Nav>
      </Base>
    </header>
  );
};

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255);
  text-align: center;
  box-shadow: rgba(0 0 0 / 0%) 0px 1px 0px 0px;
  width: 100%;
  height: 62px;
  z-index: 10;
  border-bottom: 1px solid #ebebeb;
`;
const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;
const MenuListWrapper = styled.div``;
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: fixed;
  overflow: hidden;
`;
const Menu = styled.li`
  display: fixed;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  margin-left: 24px;
`;
const MenuBtn = styled.button<{ active?: boolean }>`
  font-size: 15px;
  color: ${({ active }) => (active ? `rgb(53,53,53))` : `rgb(126,126,126)`)};
  cursor: pointer;
  border: none;
  background: none;
`;
const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;
const Link = styled.a`
  text-decoration: none;
`;

const SeachContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SerachFormWrapper = styled.div``;
const SearchForm = styled.div``;
const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;
const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
  outline: none;
`;
const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;
const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;

export default Header;
