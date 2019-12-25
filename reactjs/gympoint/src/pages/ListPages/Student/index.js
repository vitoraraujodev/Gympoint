import React from 'react';

// import { Container } from './styles';

import api from '~/services/api';

export default function StudentList() {
  api.get('students');
  return <h1>StudentList</h1>;
}
