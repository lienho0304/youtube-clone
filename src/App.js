import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import RecomendVideo from "./components/RecomendVideo";
import styled from "styled-components";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          
            <Route path="/search">
            <Container>
              <SideBar />
              <SearchPage />
              </Container>
          </Route>
      
          <Route path="/">
            <Container>
              <SideBar />
              <RecomendVideo />
            </Container>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`;
