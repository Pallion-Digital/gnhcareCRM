import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LocalAuthorityList } from "./localAuthority/LocalAuthorityList";
import { LocalAuthorityCreate } from "./localAuthority/LocalAuthorityCreate";
import { LocalAuthorityEdit } from "./localAuthority/LocalAuthorityEdit";
import { LocalAuthorityShow } from "./localAuthority/LocalAuthorityShow";
import { ChildProfileList } from "./childProfile/ChildProfileList";
import { ChildProfileCreate } from "./childProfile/ChildProfileCreate";
import { ChildProfileEdit } from "./childProfile/ChildProfileEdit";
import { ChildProfileShow } from "./childProfile/ChildProfileShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="LocalAuthority"
          list={LocalAuthorityList}
          edit={LocalAuthorityEdit}
          create={LocalAuthorityCreate}
          show={LocalAuthorityShow}
        />
        <Resource
          name="ChildProfile"
          list={ChildProfileList}
          edit={ChildProfileEdit}
          create={ChildProfileCreate}
          show={ChildProfileShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
      </Admin>
    </div>
  );
};

export default App;
