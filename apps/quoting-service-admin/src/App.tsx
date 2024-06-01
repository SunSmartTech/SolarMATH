import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CalculationToolList } from "./calculationTool/CalculationToolList";
import { CalculationToolCreate } from "./calculationTool/CalculationToolCreate";
import { CalculationToolEdit } from "./calculationTool/CalculationToolEdit";
import { CalculationToolShow } from "./calculationTool/CalculationToolShow";
import { SystemOptionList } from "./systemOption/SystemOptionList";
import { SystemOptionCreate } from "./systemOption/SystemOptionCreate";
import { SystemOptionEdit } from "./systemOption/SystemOptionEdit";
import { SystemOptionShow } from "./systemOption/SystemOptionShow";
import { CustomerProfileList } from "./customerProfile/CustomerProfileList";
import { CustomerProfileCreate } from "./customerProfile/CustomerProfileCreate";
import { CustomerProfileEdit } from "./customerProfile/CustomerProfileEdit";
import { CustomerProfileShow } from "./customerProfile/CustomerProfileShow";
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
        title={"QuotingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CalculationTool"
          list={CalculationToolList}
          edit={CalculationToolEdit}
          create={CalculationToolCreate}
          show={CalculationToolShow}
        />
        <Resource
          name="SystemOption"
          list={SystemOptionList}
          edit={SystemOptionEdit}
          create={SystemOptionCreate}
          show={SystemOptionShow}
        />
        <Resource
          name="CustomerProfile"
          list={CustomerProfileList}
          edit={CustomerProfileEdit}
          create={CustomerProfileCreate}
          show={CustomerProfileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
