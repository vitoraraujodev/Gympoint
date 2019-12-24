import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';

import HelpOrderList from '~/pages/ListPages/HelpOrder';
import PlanList from '~/pages/ListPages/Plan';
import RegistrationList from '~/pages/ListPages/Registration';
import StudentList from '~/pages/ListPages/Student';

import PlanEdition from '~/pages/EditPages/Plan';
import RegistrationEdition from '~/pages/EditPages/Registration';
import StudentEdition from '~/pages/EditPages/Student';

import PlanCadastration from '~/pages/CadastrationPages/Plan';
import RegistrationCadastration from '~/pages/CadastrationPages/Registration';
import StudentCadastration from '~/pages/CadastrationPages/Student';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} notPrivate />
      <Route path="/students" exact component={StudentList} />
      <Route path="/students/new" component={StudentCadastration} />
      <Route path="/students/edit/:id" component={StudentEdition} />
      <Route path="/plan" exact component={PlanList} />
      <Route path="/plan/new" component={PlanCadastration} />
      <Route path="/plan/edit/:id" component={PlanEdition} />
      <Route path="/registration" exact component={RegistrationList} />
      <Route path="/registration/new" component={RegistrationCadastration} />
      <Route path="/registration/edit/:id" component={RegistrationEdition} />
      <Route path="/helporder" component={HelpOrderList} />
    </Switch>
  );
}
