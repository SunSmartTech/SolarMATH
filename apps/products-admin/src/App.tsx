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
import { ManufacturerList } from "./manufacturer/ManufacturerList";
import { ManufacturerCreate } from "./manufacturer/ManufacturerCreate";
import { ManufacturerEdit } from "./manufacturer/ManufacturerEdit";
import { ManufacturerShow } from "./manufacturer/ManufacturerShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { SubCategoryList } from "./subCategory/SubCategoryList";
import { SubCategoryCreate } from "./subCategory/SubCategoryCreate";
import { SubCategoryEdit } from "./subCategory/SubCategoryEdit";
import { SubCategoryShow } from "./subCategory/SubCategoryShow";
import { PVmoduleList } from "./pVmodule/PVmoduleList";
import { PVmoduleCreate } from "./pVmodule/PVmoduleCreate";
import { PVmoduleEdit } from "./pVmodule/PVmoduleEdit";
import { PVmoduleShow } from "./pVmodule/PVmoduleShow";
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
        title={"Products"}
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
          name="Manufacturer"
          list={ManufacturerList}
          edit={ManufacturerEdit}
          create={ManufacturerCreate}
          show={ManufacturerShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="SubCategory"
          list={SubCategoryList}
          edit={SubCategoryEdit}
          create={SubCategoryCreate}
          show={SubCategoryShow}
        />
        <Resource
          name="PVmodule"
          list={PVmoduleList}
          edit={PVmoduleEdit}
          create={PVmoduleCreate}
          show={PVmoduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
